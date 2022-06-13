const helpers = {}

helpers.format = () => {
  let today = new Date()
  
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  let strDate = today.toLocaleDateString(undefined, options)

  let capitalize = strDate.charAt(0).toUpperCase()
  
  return capitalize + strDate.slice(1)
}

module.exports = helpers