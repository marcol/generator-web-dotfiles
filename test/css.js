const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/css')

describe('Test Stylelint', function () {
  it('checks if Stylelint files are present', () => {
    assert.file(config.files)
  })

  it('checks package.json css lint script', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), 'lint:css')
  })

  it('checks package.json css lint dependencies', () => {
    Object.keys(config.package.devDependencies).forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
