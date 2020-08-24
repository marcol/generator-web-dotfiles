const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const testPath = path.join(__dirname, '.tmp-all/')
const features = Object.keys(require('../generators/app/features'))
const files = features.map((cur) => {
  return require('../generators/app/settings/' + cur).files
})

describe('Test all option', function () {
  beforeAll(async (done) => {
    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withArguments([
        'all'
      ])
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  it('checks if all files are present', async () => {
    const checkList = files.flat().map((cur) => {
      return testPath + cur
    })
    assert.file(checkList)
  })
})

module.exports = null
