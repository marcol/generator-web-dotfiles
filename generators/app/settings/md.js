module.exports = {
  prompt: {
    type: 'confirm',
    name: 'md',
    message: 'Add markdown linting?',
    default: true
  },
  files: [
    '.remarkrc.js'
  ],
  dependencies: [
    'remark-cli',
    'remark-lint',
    'remark-preset-lint-markdown-style-guide'
  ],
  scripts: {
    'lint:md': 'remark .; exit 0',
    lint: 'npm run lint:md'
  }
}
