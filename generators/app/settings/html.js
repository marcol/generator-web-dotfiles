module.exports = {
  prompt: {
    type: 'confirm',
    name: 'html',
    message: 'Add HTMLHint?',
    default: true
  },
  files: [
    '.htmlhintrc'
  ],
  dependencies: [
    'htmlhint'
  ],
  scripts: {
    'lint:html': 'htmlhint **/*.html',
    lint: 'yarn lint:html'
  }
}
