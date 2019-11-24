const assert = require('yeoman-assert')
const config = require('../generators/app/settings/npm')

describe('Test NPM', function () {
  it('checks if npm files are present', () => {
    assert.file(config.files)
  })
})

module.exports = null
