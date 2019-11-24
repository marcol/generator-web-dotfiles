const chalk = require('chalk')
const str = require('string-sanitizer')

module.exports = function (gen) {
  const files = require('./files')(gen)
  const data = {
    project: str.sanitize.addUnderscore(gen.appname),
    name: gen.user.git.name() || '',
    email: gen.user.git.email() || '',
    year: (new Date().getFullYear())
  }

  // set package json configuration
  data.scripts = JSON.stringify(require('./scripts')(gen))

  gen.log(chalk.bold.black.bgWhite('\n Writing '), chalk.bold('Creating the necessary files...'))

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath(cur), gen.destinationPath(cur), data)
  })
}
