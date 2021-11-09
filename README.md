[![NPM Downloads](https://img.shields.io/npm/dt/generator-web-dotfiles?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-web-dotfiles)
[![NPM Version](https://img.shields.io/npm/v/generator-web-dotfiles?logo=npm&style=flat-square)](https://www.npmjs.com/package/generator-web-dotfiles)
[![CI Tests](https://img.shields.io/github/workflow/status/marcol/generator-web-dotfiles/CI?logo=github&style=flat-square)](https://github.com/marcol/generator-web-dotfiles)

# generator-web-dotfiles

You can use this generator on top of other generators to enforce code standards
for js, css, html and markdown.
Setup githooks to check linting or run tests when you commit or push and
improve the quality of your commit messages with commitlint.

## Installing

First install Yeoman:

```bash
yarn global add yo
```

or

```bash
npm install -g yo
```

Now install the ultimate generator:

```bash
yarn global add generator-web-dotfiles
```

or

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

-   Commit linting with [commitlint](https://commitlint.js.org/#/guides-local-setup)
    configuration (`commitlintrc.js`) and [husky](https://github.com/typicode/husky)

-   Git commits with [husky](https://github.com/typicode/husky). Runs lint on
commit, runs tests on push. If you haven't initialized a git repository, the
githooks won't be installed.
First, initialize your git repository `git init`. You can always run the
generator again to add the hooks or install husky events `yarn husky install`
and add the files to run on events e.g.: `yarn husky add .husky/pre-commit "yarn lint"`.

## Compatibility
Version 3.x requires yo 4.x
