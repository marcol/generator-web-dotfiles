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
  package: {
    devDependencies: {
      htmlhint: '^1.1.2'
    },
    scripts: {
      'lint:html': 'htmlhint **/*.html'
    }
  }
}
