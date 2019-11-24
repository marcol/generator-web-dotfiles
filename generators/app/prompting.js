module.exports = function (gen) {
  const setts = [
    'package',
    'license',
    'readme',
    'git',
    'npm',
    'eslint',
    'css',
    'md'
  ]

  return setts.map((cur) => require('./settings/' + cur).prompt)
}
