describe('Wikipedia homepage', () => {
    it('visits Wikipedia and asserts the page loaded', {tags: 'Low Priority'}, () => {
        cy.visit('https://www.wikipedia.org')
        cy.title().should('include', 'Wikipedia')
        cy.get('input#searchInput').should('be.visible')
        cy.log('Test Four completed')
    })

    it('Wikipedia - 1', {tags: 'High Priority'}, () => {
        cy.log('Test Case 1: Visiting the homepage');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Wikipedia - 2', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 2: Checking if the logo is visible');
    });

    it('Wikipedia - 3', {tags: 'High Priority'}, () => {
        cy.log('Test Case 3: Clicking the login button');
    });

    it('Wikipedia - 4', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 4: Typing in the search box');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Wikipedia - 5', {tags: 'High Priority'}, () => {
        cy.log('Test Case 5: Checking if navigation menu exists');
    });

    it('Wikipedia - 6', {tags: 'Low Priority'}, () => {
        cy.log('Test Case 6: Verifying page title');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Wikipedia - 7', {tags: 'High Priority'}, () => {
        cy.log('Test Case 7: Clicking Products menu item');
        throw new Error('Intentional Failure for Test Three')
    });

    it('Wikipedia - 8', {tags: 'Critical'}, () => {
        cy.log('Test Case 8: Submitting a sample form');
    });

    it('Wikipedia - 9', {tags: 'Critical'}, () => {
        cy.log('Test Case 9: Checking footer information');
    });

    it('Wikipedia - 10', {tags: 'Critical'}, () => {
        cy.log('Test Case 10: Checking if submit button is enabled');
    });
})