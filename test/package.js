const assert = require('yeoman-assert')
const prompts = require('./config/prompts')
const str = require('string-sanitizer')
const config = require('../generators/app/settings/package')

describe('Testing package.json', function () {
  it('checks if file was created', () => {
    assert.file(config.files)
  })

  it('checks if inserted information is correct', () => {
    assert.jsonFileContent('package.json', {
      name: str.sanitize.addUnderscore(prompts.project)
    })
  })
})
