const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


module.exports =defineConfig({
  reporter : "cypress-mochawesome-reporter",
  reporterOptions: {
      charts: true,
      reportPageTitle: "automatic report" ,
      embeddedScreenshots: true ,
      saveAllAttempts: false,
      overwrite: false,
      reportFileName: "[status]_[datetime]-[name]-report",
      autoOpen: true,
  },


  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin') (on);
    },
  },
});