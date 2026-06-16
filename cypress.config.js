const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://automationexercise.com",

    viewportWidth: 1366,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});