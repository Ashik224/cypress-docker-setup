describe('Wikipedia homepage', () => {
    it('visits Wikipedia and asserts the page loaded', {tags: 'Low-Priority'}, () => {
        cy.visit('https://www.wikipedia.org')
        cy.title().should('include', 'Wikipedia')
        cy.get('input#searchInput').should('be.visible')
        cy.log('Test Four completed')
    })
})