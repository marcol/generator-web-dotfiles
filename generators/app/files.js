module.exports = function (gen) {
  let files = []

  Object.entries(gen.answers).forEach((cur) => {
    if (cur[1]) {
      files = files.concat(require('./settings/' + cur[0]).files)
    }
  })

  return files
}
