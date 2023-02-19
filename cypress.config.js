const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false,
  },
  env: {
    baseUrl: "https://kasirdemo.belajarqa.com",
  },
});
