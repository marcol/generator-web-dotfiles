module.exports = function (gen) {
  const setts = [
    'package',
    'license',
    'eslint'
    // 'css'
    // git
    // html
    // md
    // readme
    // npm
  ]

  return setts.map((cur) => require('./settings/' + cur).prompt)
}
