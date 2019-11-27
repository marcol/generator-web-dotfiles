const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const prompts = require('./config/noprompts')
const features = Object.keys(require('../generators/app/features'))
const files = features.map((cur) => '../generators/app/settings/' + cur)

describe('Test no to all', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': true
      })
      .then(function () {
        return true
      })
  })

  it('checks if no files are present', () => {
    assert.noFile(files)
  })
})

module.exports = null
