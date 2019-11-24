const assert = require('yeoman-assert')
const path = require('path')
const config = require('../generators/app/settings/eslint')

describe('Test eslint', function () {
  it('checks if eslint files are present', () => {
    assert.file(config.files)
  })

  it('checks eslint files contents', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: config.scripts
    })
  })
})

module.exports = null
