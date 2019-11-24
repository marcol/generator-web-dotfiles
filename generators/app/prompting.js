module.exports = function (gen) {
  const setts = [
    'package',
    'eslint'
  ]

  return setts.map((cur) => require('./settings/' + cur).prompt)
}
