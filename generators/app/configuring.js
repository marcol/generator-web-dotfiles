module.exports = function (gen) {
  var data = {}

  Object.entries(gen.answers).forEach((cur) => {
    if (cur[1]) {
      data[cur[0]] = require('./settings/' + cur[0]).package
    }
  })

  return data
}
