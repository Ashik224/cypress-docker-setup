describe('Site visit', () => {
    it('should visit google', () => {
        cy.visit('https://www.google.com')
        cy.log('Test Three completed')
        console.log('Test Three completed from console')
        throw new Error('Intentional Failure for Test Three')
        cy.wait(1000)
    })
})