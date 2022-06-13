const express = require('express')
const path = require('path')
const helpers = require('./lib/helpers')
const app = express()
const port = 3000

require('./db')

const Task = require('./models/Tasks')

app.use(express.urlencoded({
  extended: false
}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', async (req, res) => {

  const items = await Task.find()
  
  res.render('list', { 
    helper: helpers, 
    newListItem: items 
  })

})

app.get('/:id', async (req, res) => {
  const { id } = req.params
  
  await Task.findByIdAndDelete(id)

  res.redirect('/')
})

app.post('/', async (req, res) => {
  
  var item = req.body.newItem

  const newTask = new Task({
    item: item
  })

  const taskSaved = await newTask.save()
    .catch(err => console.log(err))

  res.redirect('/')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log('Server on port', port)
})