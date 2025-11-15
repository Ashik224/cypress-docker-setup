describe('Neflix Homepage', () => {
  it('should visit Netflix', {tags: "High Priority"}, () => {
    cy.visit('https://www.netflix.com')
    cy.log('Test Two completed!!')
    console.log('Test Two completed from console')
    cy.wait(1000)
  })
  
  it('should visit Fast', {tags: 'Critical'}, () => {
    cy.visit('https://www.fast.com')
    cy.log('Test Fast completed!!')
    cy.wait(1000)
  })

    it('Netflix - 1', {tags: 'Critical'}, () => {
    cy.log('Test Case 1: Visiting the homepage');
    });

    it('Netflix - 2', {tags: "High Priority"}, () => {
        cy.log('Test Case 2: Checking if the logo is visible');
    });

    it('Netflix - 3', {tags: "High Priority"}, () => {
        cy.log('Test Case 3: Clicking the login button');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Netflix - 4', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 4: Typing in the search box');
    });

    it('Netflix - 5', {tags: "High Priority"}, () => {
        cy.log('Test Case 5: Checking if navigation menu exists');
    });

    it('Netflix - 6', {tags: 'Critical'}, () => {
        cy.log('Test Case 6: Verifying page title');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Netflix - 7', {tags: "High Priority"}, () => {
        cy.log('Test Case 7: Clicking Products menu item');
    });

    it('Netflix - 8', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 8: Submitting a sample form');
    });

    it('Netflix - 9', {tags: "High Priority"}, () => {
        cy.log('Test Case 9: Checking footer information');
    });

    it('Netflix - 10', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 10: Checking if submit button is enabled');
    });
})  
