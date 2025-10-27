describe('Site visit', () => {
    it('should visit google', () => {
        cy.visit('https://www.google.com')
        cy.wait(5000)
    })
})