module.exports = function (gen) {
  let deps = []

  Object.entries(gen.answers).forEach((cur) => {
    if (cur[1]) {
      deps = deps.concat(require('./settings/' + cur[0]).dependencies)
    }
  })

  return deps
}
