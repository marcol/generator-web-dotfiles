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
      htmlhint: '0.16.0'
    },
    scripts: {
      'lint:html': 'htmlhint **/*.html'
    }
  }
}
