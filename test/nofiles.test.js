const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const prompts = require('./config/noprompts')
const testPath = path.join(__dirname, '.tmp-nofiles/')

describe('Test no to all', function () {
  beforeAll(async () => {
    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withPrompts(prompts)
      .withOptions({
        'skip-install': true,
        silent: true
      })
  }, 120000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  function getFiles () {
    const files = Object.keys(require('../generators/app/features'))
      .map((cur) => {
        const settings = require('../generators/app/settings/' + cur)
        return settings.files.map((cur) => testPath + cur)
      })

    return files.flat()
  }

  it('checks if no files are present', () => {
    assert.noFile(getFiles())
  })
})

module.exports = null
