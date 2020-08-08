[![NPM Downloads](https://img.shields.io/npm/dt/generator-web-dotfiles?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-web-dotfiles)
[![NPM Version](https://img.shields.io/npm/v/generator-web-dotfiles?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-web-dotfiles)
![Node.js CI](https://img.shields.io/github/workflow/status/marcol/generator-web-dotfiles/Node.js%20CI?label=Node.js%20CI&logo=github&style=flat-square)
[![Dependencies](https://img.shields.io/librariesio/release/npm/generator-web-dotfiles?style=flat-square)](https://libraries.io/npm/generator-web-dotfiles)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?logo=javascript&style=flat-square)](https://standardjs.com)

# generator-web-dotfiles
You can use this generator on top of other generators to enforce code standards.

## Installing
First install Yeoman:
```bash
npm install -g yo
```

Now install the ultimate generator:
```bash
npm install -g generator-web-dotfiles
```

Finally, run and follow the instructions:
```bash
yo web-dotfiles
```

### Options
You can accept all config files and escape the question by using the option
`all`:
```bash
yo web-dotfiles --all
```

## Features
-   `package.json` automatic configuration

-   ISC license

-   README with name of the project

-   Pre-populated `.gitignore`

-   NPM configuration `.npmrc`

-   JavaScript linting through [Eslint](https://eslint.org/)
with [standard](https://standardjs.com/) configuration
(`.eslintrc.json`, `.eslintignore`)

-   CSS linting through [Stylelint](https://github.com/stylelint/stylelint)
with [standard](https://github.com/stylelint/stylelint-config-standard)
configuration (`.stylelintrc.json`, `.stylelintignore`)

-   HTML linting through
[HTMLHint](https://github.com/htmlhint/HTMLHint) configuration (`.htmlhintrc`)

-   Markdown linting through
[Remark](https://github.com/remarkjs/remark-lint) with
[markdown style guide](https://github.com/remarkjs/remark-lint/tree/master/packages/remark-preset-lint-markdown-style-guide)
configuration (`.remarkrc.js`)
