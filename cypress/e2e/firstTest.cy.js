describe('Example Homepage', () => {
  it('visits example.com', {tags: ['@high']}, () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.log('Test One completed')
    console.log('Test One completed from console')
    cy.wait(1000)
  })
  
  it('visits example.com - 2', {tags: ['@critical']}, () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain').should('be.visible')
    cy.log('Test One completed')
    console.log('Test One completed from console')
    cy.wait(1000)
  })
})
