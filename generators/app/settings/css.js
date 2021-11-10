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
  package: {
    devDependencies: {
      stylelint: '^13.13.1',
      'stylelint-config-standard': '^22.0.0'
    },
    scripts: {
      'lint:css': 'stylelint **/*.html **/*.css --allow-empty-input',
      lint: 'yarn lint:css'
    }
  }
}
