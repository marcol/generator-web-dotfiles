module.exports = {
  prompt: {
    type: 'confirm',
    name: 'css',
    message: 'Add Stylelint?',
    default: true
  },
  files: [
    '.stylelintignore',
    '.stylelintrc.json'
  ],
  dependencies: [
    'stylelint',
    'stylelint-config-standard'
  ],
  scripts: {
    'lint:css': 'stylelint **/*.html **/*.css; exit 0',
    lint: 'npm run lint:css'
  }
}
