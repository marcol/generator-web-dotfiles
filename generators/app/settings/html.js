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
    'lint:css': 'htmlhint **/*.html; exit 0',
    lint: 'npm run lint:html'
  }
}
