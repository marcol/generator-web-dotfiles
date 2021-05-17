const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/html')

describe('Test HTML', function () {
  it('checks if HTMLHint files are present', () => {
    assert.file(config.files)
  })

  it('checks package.json HTMLHint script', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('lint:html'))
  })

  it('checks package.json HTMLHint dependencies', () => {
    Object.keys(config.package.devDependencies).forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
