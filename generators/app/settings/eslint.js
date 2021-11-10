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
  package: {
    devDependencies: {
      eslint: '^7.32.0',
      'eslint-plugin-html': '^6.1.2',
      'eslint-plugin-markdown': '^2.1.0',
      'eslint-plugin-filenames': '^1.3.2',
      'eslint-plugin-json-format': '^2.0.1',
      'eslint-plugin-import': '^2.25.3',
      'eslint-plugin-node': '^11.1.0',
      'eslint-plugin-promise': '^5.1.0',
      'eslint-config-standard': '^16.0.2'
    },
    scripts: {
      'lint:js': 'eslint'
    }
  }
}
