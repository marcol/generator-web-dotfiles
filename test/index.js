const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('./config/prompts')
const tests = [
  './package',
  './license',
  './readme',
  './git',
  './npm',
  './eslint',
  './css',
  './html',
  './md',
  './all',
  './nofiles'
]

describe('Web-dotfiles generator tests\n\n', function () {
  this.timeout(120000)

  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': false
      })
      .then(function () {
        console.log('\n-----\n')
        return true
      })
  })

  tests.forEach((test) => require(test))

  after(() => {
    rimraf.sync(path.join(__dirname, '.tmp'))
  })
})

module.exports = null
