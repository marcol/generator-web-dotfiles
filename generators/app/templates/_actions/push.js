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
   { title: 'Check for vulnerabilites in dependencies', task: () => promise('yarn audit --groups dependencies') },
   { title: 'Run tests', task: () => promise('yarn test') }
 ])
 
 tasks.run()
   .then(() => {
     sugar.pass('Everything is ok')
   })
   .catch((error) => {
     sugar.fail('Please fix the issues before pushing', error)
   })
  