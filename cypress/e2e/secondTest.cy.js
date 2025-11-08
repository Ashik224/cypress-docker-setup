describe('Site visit', () => {
  it('should visit Netflix', () => {
    cy.visit('https://www.netflix.com')
    cy.log('Test Two completed')
    console.log('Test Two completed from console')
    cy.wait(5000)
  })
})
