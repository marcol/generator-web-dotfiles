const chalk = require('chalk')

/**
 * initialization methods: checking current project state, getting
 * configs, etc)
 * @return void
 */
module.exports = function (gen) {
  gen.log(chalk.black.bold.bgBlue('\n Starting '), chalk.bold('Welcome to web-dotfiles generator!'))
}
