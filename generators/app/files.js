
module.exports = function (gen) {
  const files = require('./settings/package.js').files

  if (gen.eslint) {
    files.push(require('./settings/eslint').files)
  }

  return files
}
