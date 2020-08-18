const chalk = require('chalk')

module.exports = function (gen) {
  let files = []

  Object.entries(gen.answers).forEach((cur) => {
    if (cur[1]) {
      files = files.concat(require('./settings/' + cur[0]).dependencies)
    }
  })

  gen.log(chalk.bold.black.bgWhite('\n Instal '), chalk.bold('Installing dependencies...'))

  gen.yarnInstall(files, { dev: true, skipMessage: true })
}
