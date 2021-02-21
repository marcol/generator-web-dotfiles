const { info } = require('sugar-chalk')
const str = require('string-sanitizer')

module.exports = function (gen) {
  const files = require('./files')(gen)

  const data = {
    project: str.sanitize.addUnderscore(gen.appname),
    name: gen.user.git.name() || '',
    email: gen.user.git.email() || '',
    year: (new Date().getFullYear()),
    license: (gen.answers.license) ? 'ISC' : ''
  }

  // set package json configuration
  data.scripts = JSON.stringify(require('./scripts')(gen))
  info('Creating the necessary files...')

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath('_' + cur), gen.destinationPath(cur), data)
  })
}
