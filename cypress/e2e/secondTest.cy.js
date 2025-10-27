describe('Site visit', () => {
  it('should visit Netflix', () => {
    cy.visit('https://www.netflix.com')
    cy.wait(5000)
  })
})
