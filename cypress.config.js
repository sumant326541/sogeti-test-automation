const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: true,
  e2e: {
    baseUrl: 'https://www.sogeti.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
