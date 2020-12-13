module.exports = {
  prompt: {
    type: 'confirm',
    name: 'eslint',
    message: 'Add eslint?',
    default: true
  },
  files: [
    '.eslintignore',
    '.eslintrc.json'
  ],
  dependencies: [
    'eslint',
    'babel-eslint',
    'eslint-plugin-html',
    'eslint-plugin-markdown',
    'eslint-plugin-filenames',
    'eslint-plugin-json-format',
    'eslint-plugin-import',
    'eslint-plugin-node',
    'eslint-plugin-promise',
    'eslint-config-standard'
  ],
  scripts: {
    'lint:js': 'eslint',
    lint: 'yarn lint:js'
  }
}
