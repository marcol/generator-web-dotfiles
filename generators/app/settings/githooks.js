module.exports = {
  prompt: {
    type: 'confirm',
    name: 'githooks',
    message: 'Add githooks for push and commit?',
    default: true
  },
  files: [],
  dependencies: [
    'husky'
  ],
  data: {
    husky: {
      hooks: {
        'pre-push': 'yarn test',
        'pre-commit': 'yarn lint'
      }
    }
  }
}
