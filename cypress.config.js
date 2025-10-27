const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
 
  e2e: {
    video:true, 
   baseUrl:'http://localhost:4000',
   reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      // implement node event listeners here
    },


  },

});
