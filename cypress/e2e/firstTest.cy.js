describe('Example Homepage', () => {
  it('visits example.com', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.log('Test One completed')
    console.log('Test One completed from console')
    cy.wait(1000)
  })
})
