const assert = require('yeoman-assert')
const path = require('path')
const str = require('string-sanitizer')
const prompts = require('./config/prompts')
const config = require('../generators/app/settings/readme')

describe('Test README', function () {
  it('checks if license file is present', () => {
    assert.file(config.files)
  })

  it('checks README content', () => {
    assert.fileContent(path.join(__dirname, '.tmp/README.md'),
      new RegExp(str.sanitize.addUnderscore(prompts.project)))
  })
})

module.exports = null
