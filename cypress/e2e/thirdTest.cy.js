describe('Google Homepage', () => {
    it('should visit google', {tags: 'Low-Priority'}, () => {
        cy.visit('https://www.google.com')
        cy.log('Test Three completed')
        console.log('Test Three completed from console')
        throw new Error('Intentional Failure for Test Three')
    })
    
    it('should type some data', {tags: 'High-Priority'}, () => {
        cy.visit('https://www.google.com')
        cy.get('textarea[class="gLFyf"]').type('Cypress Testing')
        cy.log('Test Three - Second it block completed')
        cy.wait(7000)
    })
})