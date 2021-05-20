const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/eslint')

describe('Test eslint', function () {
  it('checks if eslint files are present', () => {
    assert.file(config.files)
  })

  it('checks package.json eslint script', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), 'lint:js')
  })

  it('checks package.json eslint dependencies', () => {
    Object.keys(config.package.devDependencies).forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
