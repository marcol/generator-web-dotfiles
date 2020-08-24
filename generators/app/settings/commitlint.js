module.exports = {
  prompt: {
    type: 'confirm',
    name: 'commitlint',
    message: 'Add Commit linting and Git hooks?',
    default: true
  },
  files: [
    '.commitlintrc.json'
  ],
  dependencies: [
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'husky'
  ],
  data: {
    husky: {
      hooks: {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
      }
    }
  }
}
