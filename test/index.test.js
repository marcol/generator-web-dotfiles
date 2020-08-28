const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('./config/prompts')
const tests = Object.keys(require('../generators/app/features'))

describe('Web-dotfiles generator tests', function () {
  beforeAll(async (done) => {
    process.env.TEST = true

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false,
        silent: true
      })

    done()
  }, 120000)

  afterAll(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })

  tests.forEach((test) => require('./' + test))
})

module.exports = null
