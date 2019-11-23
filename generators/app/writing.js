const chalk = require('chalk')
const str = require('string-sanitizer')

module.exports = function (gen) {
  const files = require('./files')(gen)
  const data = {
    project: str.sanitize.addUnderscore(gen.answers.project),
    name: gen.answers.name,
    email: gen.answers.email,
    year: (new Date().getFullYear())
  }

  gen.log(chalk.bold.black.bgWhite('\n Writing '), chalk.bold('Creating the necessary files...'))

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur), gen.destinationPath(cur), data)
  })
}
