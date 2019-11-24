module.exports = function (gen) {
  var data = {}

  Object.entries(gen.answers).forEach((cur) => {
    const scripts = require('./settings/' + cur[0]).scripts

    if (cur[1] && scripts) {
      Object.keys(scripts).forEach((key) => {
        if (data[key]) {
          data[key] = [data[key], scripts[key]].join('; ')
        } else {
          data[key] = scripts[key]
        }
      })
    }
  })

  return data
}
