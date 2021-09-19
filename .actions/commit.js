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
 function promise (cmd, ctx) {
   return new Promise((resolve, reject) => {
     shell.exec(cmd, { silent: true }, (code) => {
       if (code) {
         reject(code)
         ctx.rejected = true
       } else {
         resolve()
       }
     })
   })
 }
 
 const tasks = new Runner([
   { title: 'Run JS linters', task: (ctx) => promise('yarn lint:js', ctx) },
   { title: 'Run Markdown linters', task: (ctx) => promise('yarn lint:md', ctx) }
 ])
 
 tasks.run()
   .then(() => {
     sugar.pass('Everything is ok')
   })
   .catch((error) => {
     sugar.fail('Please fix the issues before committ', error)
   })
 