/**
 * Script to run before release
 */
 const shell = require('shelljs')
 const sugar = require('sugar-chalk')
 const Runner = require('listr')
 
 sugar.info('Creating new release')
 
 /**
  * Handle promosise and log progress
  * @param  {String} cmd command to run
  * @param  {Object} log Ora instance to log information
  * @return void
  */
 function promise (cmd) {
   return new Promise((resolve, reject) => {
     shell.exec(cmd, { silent: true }, (code) => {
       if (code) {
         reject(new Error('Command exited with code' + code))
       } else {
         resolve()
       }
     })
   })
 }
 
 const tasks = new Runner([
   { title: 'Run CSS linter', task: () => promise('yarn lint:css') },
   { title: 'Run JS linter', task: () => promise('yarn lint:js') },
   { title: 'Run Markdown linter', task: () => promise('yarn lint:md') },
   { title: 'Run HTML linter', task: () => promise('yarn lint:html') }
 ])
 
 tasks.run()
   .then(() => {
     sugar.pass('Everything is ok')
   })
   .catch((error) => {
     sugar.fail('Please fix the issues before committ', error)
   })
 