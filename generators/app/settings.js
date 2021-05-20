const extend = require('deep-extend')

module.exports = function (gen) {
  const cache = {
    commands: [],
    files: [],
    package: {}
  }

  Object.entries(gen.answers).forEach((cur) => {
    let setts

    if (cur[1]) {
      setts = require('./settings/' + cur[0])
      cache.files = cache.files.concat(setts.files)
      extend(cache.package, setts.package)
      cache.commands = cache.commands.concat(setts.commands || [])
    }
  })

  return cache
}
