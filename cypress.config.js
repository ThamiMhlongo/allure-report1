const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.hirslanden.ch/de/corporate/home.html",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
