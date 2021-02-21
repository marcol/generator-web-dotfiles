const Generator = require('yeoman-generator')
const { silent, info } = require('sugar-chalk')

class Uncomplicated extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.option('all')
  }

  /**
   * Initialization methods (checking current project state, getting
   * configs, etc)
   * @return void
   */
  initializing () {
    silent()
    require('./initializing')(this)
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    // accept all if options is set
    if (this.options.all) {
      this.answers = require('./features')
      return
    }

    const prompts = require('./prompting')(this)
    info('We need some input from you to setup your project')
    this.answers = await this.prompt(prompts)
  }

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    require('./writing')(this)
  }

  /**
   * Install (npm...)
   * @return void
   */
  install () {
    require('./install')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    require('./end')(this)
  }
}

module.exports = Uncomplicated
