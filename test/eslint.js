const assert = require('yeoman-assert')
const path = require('path')
const target = 'test/index.js'

describe('Test eslint', function () {
  it('checks if eslint files are present', () => {
    assert.file(target)
  })

  it('checks eslint files contents', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        'lint:js': 'eslint .; exit 0'
      }
    })
  })
})

module.exports = null
