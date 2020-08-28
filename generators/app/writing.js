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

  const hooks = {}

  if (gen.answers.githooks) {
    Object.assign(hooks, require('./settings/githooks').data.husky.hooks)
  }

  if (gen.answers.commitlint) {
    Object.assign(hooks, require('./settings/commitlint').data.husky.hooks)
  }

  data.husky = JSON.stringify({ hooks: hooks })

  // set package json configuration
  data.scripts = JSON.stringify(require('./scripts')(gen))
  info('Creating the necessary files...')

  // copying files
  files.forEach((cur) => {
    gen.fs.copyTpl(gen.templatePath('_' + cur), gen.destinationPath(cur), data)
  })
}
