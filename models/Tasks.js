const { Schema, model } = require('mongoose')

const tasksSchema = new Schema({
  item: String
})

module.exports = model('Tasks', tasksSchema)