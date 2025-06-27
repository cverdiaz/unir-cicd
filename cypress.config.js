const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'test/e2e/cypress/integration/*.spec.js',
    supportFile: false,
    setupNodeEvents(on, config) {
      // Puedes agregar eventos aquí si lo necesitas
    }
  },
  defaultCommandTimeout: 1000,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/cypress_result.xml',
    toConsole: false
  }
});