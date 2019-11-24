const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')

describe('Test all option', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({
        'skip-install': true
      })
      .withArguments([
        'all'
      ])
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
    require('../generators/app/settings/npm').files,
    require('../generators/app/settings/package').files,
    require('../generators/app/settings/readme').files
  )

  it('checks if all files are present', () => {
    assert.file(files)
  })
})

module.exports = null
