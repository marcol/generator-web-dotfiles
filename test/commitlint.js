const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/commitlint')

describe('Test commitlint', function () {
  it('checks if commitlint files are present', () => {
    assert.file(config.files)
  })

  it('checks package.json husky script', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('pre-commit'))
  })

  it('checks package.json commitlint dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
