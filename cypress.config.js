const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/*.cy.{js,ts}", // where your test files are
    // baseUrl: "http://localhost:3000",           // your app URL (optional)
    supportFile: false,                       // disable support file if not used
  },
});
