describe('Google Homepage', () => {
    it('should visit google', {tags: 'Low Priority'}, () => {
        cy.visit('https://www.google.com')
        cy.log('Test Three completed')
        console.log('Test Three completed from console')
        throw new Error('Intentional Failure for Test Three')
    })
    
    it('should type some data', {tags: 'High Priority'}, () => {
        cy.visit('https://www.google.com')
        cy.get('textarea[class="gLFyf"]').type('Cypress Testing')
        cy.log('Test Three - Second it block completed')
        cy.wait(7000)
    })

    it('Google - 1', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 1: Visiting the homepage');
    });

    it('Google - 2', {tags: 'High Priority'}, () => {
        cy.log('Test Case 2: Checking if the logo is visible');
    });

    it('Google - 3', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 3: Clicking the login button');
    });

    it('Google - 4', {tags: 'High Priority'}, () => {
        cy.log('Test Case 4: Typing in the search box');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Google - 5', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 5: Checking if navigation menu exists');
    });

    it('Google - 6', {tags: 'Critical'}, () => {
        cy.log('Test Case 6: Verifying page title');
    });

    it('Google - 7', {tags: 'Critical'}, () => {
        cy.log('Test Case 7: Clicking Products menu item');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Google - 8', {tags: 'High Priority'}, () => {
        cy.log('Test Case 8: Submitting a sample form');
    });

    it('Google - 9', {tags: 'Critical'}, () => {
        cy.log('Test Case 9: Checking footer information');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Google - 10', {tags: 'Critical'}, () => {
        cy.log('Test Case 10: Checking if submit button is enabled');
    });
})