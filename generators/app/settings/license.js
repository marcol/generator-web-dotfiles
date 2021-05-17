module.exports = {
  prompt: {
    type: 'confirm',
    name: 'license',
    message: 'Add ISC License?',
    default: true
  },
  files: [
    'LICENSE'
  ],
  package: {
    license: 'ISC'
  }
}
