const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/githooks')

describe('Test githooks', function () {
  it('checks if githooks are present', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('pre-push'))
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('pre-commit'))
  })

  it('checks package.json githooks dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
