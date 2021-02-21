const { info, done } = require('sugar-chalk')

module.exports = function (gen) {
  let commands = []
  let cmd

  Object.entries(gen.answers).forEach((cur) => {
    if (cur[1]) {
      cmd = require('./settings/' + cur[0]).commands
      commands = cmd ? commands.concat(cmd) : commands
    }
  })

  info('Running commands...')

  // run commands
  commands.forEach((item) => {
    gen.spawnCommandSync(item.cmd, item.args)
  })

  done('See you soon in your next adventure!')
}
