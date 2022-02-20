module.exports = {
  prompt: {
    type: 'confirm',
    name: 'commitlint',
    message: 'Add Commit linting and Git hooks?',
    default: true
  },
  files: [
    '.commitlintrc.json',
    'actions/commit.js',
    'actions/push.js'
  ],
  package: {
    devDependencies: {
      '@commitlint/cli': '^16.2.1',
      '@commitlint/config-conventional': '^16.2.1',
      husky: '^7.0.4',
      shelljs: '^0.8.4',
      'sugar-chalk': '^1.6.7',
      listr: '^0.14.3'

    },
    scripts: {
      test: 'exit 0;'
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
      args: ['husky', 'add', '.husky/pre-commit', 'node actions/commit']
    },
    {
      cmd: 'yarn',
      args: ['husky', 'add', '.husky/pre-push', 'node actions/push']
    }
  ]
}
