describe('Docker Cypress Test', () => {
  it('visits example.com', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.wait(5000)
  })
})
