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
  package: {
    devDependencies: {
      '@commitlint/cli': '12.1.4',
      '@commitlint/config-conventional': '12.1.4',
      husky: '6.0.0'
    }
  },
  commands: [
    {
      cmd: 'git',
      args: ['init']
    },
    {
      cmd: 'yarn',
      args: ['husky', 'install']
    },
    {
      cmd: 'yarn',
      args: ['husky', 'add', '.husky/commit-msg', 'yarn commitlint --edit $1']
    },
    {
      cmd: 'yarn',
      args: ['husky', 'add', '.husky/pre-commit', 'yarn lint']
    },
    {
      cmd: 'yarn',
      args: ['husky', 'add', '.husky/pre-push', 'yarn test']
    }
  ]
}
