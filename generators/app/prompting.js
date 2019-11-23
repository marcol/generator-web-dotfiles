module.exports = function (gen) {
  return [
    {
      type: 'input',
      name: 'project',
      message: 'Your project name',
      default: gen.appname
    }, {
      type: 'input',
      name: 'name',
      message: 'Your name',
      default: gen.user.git.name() || 'Ninja Dev'
    }, {
      type: 'input',
      name: 'email',
      message: 'Your email',
      default: gen.user.git.email() || 'your@email.com'
    }, {
      type: 'confirm',
      name: 'eslint',
      message: 'Add JavaScript linting?',
      default: true
    }
  ]
}
