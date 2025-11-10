describe('Neflix Homepage', () => {
  it('should visit Netflix', () => {
    cy.visit('https://www.netflix.com')
    cy.log('Test Two completed')
    cy.wait(1000)
  })
})
