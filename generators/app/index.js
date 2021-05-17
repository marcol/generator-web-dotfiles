const Generator = require('yeoman-generator')
const { silent, info, done } = require('sugar-chalk')
const features = require('./features')
const str = require('string-sanitizer')

class Uncomplicated extends Generator {
  /**
   * Generator constructor
   */
  constructor (args, opts) {
    super(args, opts)
    this.option('all')
    this.settings = {}

    if (opts.silent) {
      silent(true)
    }
  }

  /**
   * Initialization methods (checking current project state, getting onfigs, etc)
   * @return void
   */
  initializing () {
    info('Welcome to web-dotfiles generator!')
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    if (this.options.all) {
      this.answers = features
    } else {
      info('We need some input from you to setup your project')
      const prompts = Object.keys(features).map((cur) => require('./settings/' + cur).prompt)
      this.answers = await this.prompt(prompts)
    }
  }

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    const extend = require('deep-extend')
    const pkg = {}
    const data = {
      name: str.sanitize.addUnderscore(this.appname),
      authorName: this.user.git.name() || '',
      authorEmail: this.user.git.email() || '',
      year: (new Date().getFullYear())
    }

    this.settings = require('./settings')(this)

    // add basic data to for package.json
    extend(pkg, {
      name: data.name,
      author: [
        data.authorName,
        data.authorEmail
      ].join(' ')
    }, this.settings.package)

    // set package json configuration
    info('Creating the necessary files...')

    // get features information info and copying files
    this.settings.files.forEach(cur => {
      this.fs.copyTpl(this.templatePath('_' + cur), this.destinationPath(cur), data)
    })

    // save package.json
    this.fs.writeJSON(this.destinationPath('package.json'), pkg)
  }

  /**
   * Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    info('Running commands...')

    // run commands
    this.settings.commands.forEach((item) => {
      this.spawnCommandSync(item.cmd, item.args)
    })

    done('See you soon in your next adventure!')
  }
}

module.exports = Uncomplicated
