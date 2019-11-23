const Generator = require('yeoman-generator')
// const chalk = require('chalk')

class Uncomplicated extends Generator {
  /**
   * Initialization methods (checking current project state, getting
   * configs, etc)
   * @return void
   */
  initializing () {
    require('./initializing')(this)
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    // const prompts = require('./priorities/prompting')(this)
    // this.log(chalk.bold('\nWe need some input from you to setup your project'))
    // this.answers = await this.prompt(prompts)
  }

  /**
   * Saving configurations and configure the project (creating .editorconfig
   * files and other metadata files)
   * @return void
   */
  configuring () {
    // require('./priorities/configuring')(this)
  }

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    // require('./priorities/writing')(this)
  }

  /**
   * Install (npm...)
   * @return void
   */
  install () {
    // require('./priorities/install')(this)
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
