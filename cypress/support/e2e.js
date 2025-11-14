require('cypress-grep')();

Cypress.on('test:after:run', (test, runnable) => {
  console.log('Test title:', test.title);
  // console.log('Test config tags:', test._testConfig);
  console.log('Test config tags:', test._testConfig.testConfigList[0].overrides.tags);
  if (test._testConfig) {
    test.context = test._testConfig.testConfigList[0].overrides.tags;
  }
  
});