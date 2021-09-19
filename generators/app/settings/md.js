module.exports = {
  prompt: {
    type: 'confirm',
    name: 'md',
    message: 'Add markdown linting?',
    default: true
  },
  files: [
    '.remarkrc.js',
    '.remarkignore'
  ],
  package: {
    devDependencies: {
      'remark-cli': '^10.0.0',
      'remark-lint': '^9.1.0',
      'remark-preset-lint-markdown-style-guide': '^5.1.0'
    },
    scripts: {
      'lint:md': 'remark .'
    }
  }
}
