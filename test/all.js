const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const features = Object.keys(require('../generators/app/features'))
const files = features.map((cur) => '../generators/app/settings/' + cur)

describe('Test all option', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({
        'skip-install': true
      })
      .withArguments([
        'all'
      ])
      .then(function () {
        return true
      })
  })

  it('checks if all files are present', () => {
    assert.file(files)
  })
})

module.exports = null
