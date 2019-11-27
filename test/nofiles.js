const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const prompts = require('./config/noprompts')

describe('Test no to all', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withPrompts(prompts)
      .withOptions({
        'skip-install': true
      })
      .then(function () {
        return true
      })
  })

  const files = [].concat(
    require('../generators/app/settings/css').files,
    require('../generators/app/settings/eslint').files,
    require('../generators/app/settings/git').files,
    require('../generators/app/settings/license').files,
    require('../generators/app/settings/md').files,
    require('../generators/app/settings/html').files,
    require('../generators/app/settings/npm').files,
    require('../generators/app/settings/package').files,
    require('../generators/app/settings/readme').files
  )

  it('checks if no files are present', () => {
    assert.noFile(files)
  })
})

module.exports = null
