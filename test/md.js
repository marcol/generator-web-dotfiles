const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/md')

describe('Test Markdown linting', function () {
  it('checks if remark files is present', () => {
    assert.file(config.files)
  })

  it('checks package.json Markdown lint script', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('lint:md'))
  })

  it('checks package.json Markdown lint dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp(cur))
    })
  })
})

module.exports = null
