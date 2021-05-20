const ora = require('ora')
const shell = require('shelljs')
const pkg = require('../package.json')

const oraPublish = ora('publising package').start()
const oraTag = ora('creating tag').start()
const oraUnit = ora('running unit tests').start()
const oraLint = ora('running linters').start()
const oraDeps = ora('checking dependencies').start()

function promise (cmd, log) {
  return (new Promise((resolve, reject) => {
    shell.exec(cmd, { silent: true }, (code) => {
      if (code) {
        reject(code)
        log.fail()
      } else {
        resolve(code)
        log.succeed()
      }
    })
  }))
}

Promise.all([
  promise('yarn audit --level high', oraDeps),
  promise('yarn lint', oraLint),
  promise('yarn test:unit', oraUnit),
  promise('git tag ' + pkg.version + ' && git push --tags', oraTag)
]).then(() => {
  promise('yarn publish --tag ' + pkg.version, oraPublish).catch(() => {})
}).catch(() => {
  oraPublish.fail()
})
