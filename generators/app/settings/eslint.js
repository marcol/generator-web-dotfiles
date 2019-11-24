module.exports = {
  prompt: {
    type: 'confirm',
    name: 'eslint',
    message: 'Add eslint',
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
    'eslint-plugin-mocha',
    'eslint-plugin-standard',
    'eslint-config-standard'
  ],
  package: {
    scripts: {
      'lint:js': 'eslint .; exit 0',
      lint: 'npm run lint:js'
    }
  }
}
