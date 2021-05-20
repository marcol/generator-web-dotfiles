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
      'remark-cli': '^9.0.0',
      'remark-lint': '^8.0.0',
      'remark-preset-lint-markdown-style-guide': '^4.0.0'
    },
    scripts: {
      'lint:md': 'remark .'
    }
  }
}
