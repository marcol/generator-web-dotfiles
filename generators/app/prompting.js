module.exports = function (gen) {
  const features = require('./features')
  return Object.keys(features).map((cur) => require('./settings/' + cur).prompt)
}
