const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/commitlint')

describe('Test commitlint', () => {
  it('checks if commitlint files are present', () => {
    assert.file(config.files)
  })

  it('checks for hooks', () => {
    assert.file([
      path.join(__dirname, '.tmp/.husky/commit-msg'),
      path.join(__dirname, '.tmp/.husky/pre-commit'),
      path.join(__dirname, '.tmp/.husky/pre-push')
    ])
  })

  it('checks package.json commitlint dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
