const assert = require('yeoman-assert')
const path = require('path')
const prompts = require('./config/prompts')
const config = require('../generators/app/settings/license')

describe('Test LICENSE', function () {
  it('checks if license file is present', () => {
    assert.file(config.files)
  })

  it('checks LICENSE content', () => {
    assert.fileContent(path.join(__dirname, '.tmp/LICENSE'), new RegExp(prompts.email))
  })

  it('checks LICENSE in package json', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), config.data)
  })
})

module.exports = null
