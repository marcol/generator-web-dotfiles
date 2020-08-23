const assert = require('yeoman-assert')
const path = require('path')

describe('Test githooks', function () {
  it('checks if githooks are present', () => {
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('pre-push'))
    assert.fileContent(path.join(__dirname, '.tmp/package.json'), new RegExp('pre-commit'))
  })
})

module.exports = null
