const assert = require('yeoman-assert')
const config = require('../generators/app/settings/git')

describe('Test Git', function () {
  it('checks if Git files are present', () => {
    assert.file(config.files)
  })
})

module.exports = null
