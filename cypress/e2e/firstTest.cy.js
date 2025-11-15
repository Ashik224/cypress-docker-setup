describe('Example Homepage', () => {
  it('visits example.com', {tags: 'High Priority'}, () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.log('Test One completed')
    console.log('Test One completed from console')
    cy.wait(1000)
  })
  
  it('visits example.com - 2', {tags: 'Critical'}, () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.log('Test One completed')
    console.log('Test One completed from console')
    cy.wait(1000)
  })

  it('Example - 1', {tags: 'High Priority'}, () => {
    cy.log('Test Case 1: Visiting the homepage');
  });

  it('Example - 2', {tags: 'Low Priority'}, () => {
    cy.log('Test Case 2: Checking if the logo is visible');
  });

  it('Example - 3', {tags: 'Low Priority'}, () => {
    cy.log('Test Case 3: Clicking the login button');
    throw new Error('Intentional Failure for Test Three')
  });

  it('Example - 4', {tags: 'Critical'}, () => {
    cy.log('Test Case 4: Typing in the search box');
  });

  it('Example - 5', {tags: 'Low Priority'}, () => {
    cy.log('Test Case 5: Checking if navigation menu exists');
    throw new Error('Intentional Failure for Test Three')
  });

  it('Example - 6', {tags: 'Critical'}, () => {
    cy.log('Test Case 6: Verifying page title');
  });

  it('Example - 7', {tags: 'Low Priority'}, () => {
    cy.log('Test Case 7: Clicking Products menu item');
  });

  it('Example - 8', {tags: 'High Priority'}, () => {
    cy.log('Test Case 8: Submitting a sample form');
  });

  it('Example - 9', {tags: 'Critical'}, () => {
    cy.log('Test Case 9: Checking footer information');
  });

  it('Example - 10', {tags: 'Low Priority'}, () => {
    cy.log('Test Case 10: Checking if submit button is enabled');
  });
})
