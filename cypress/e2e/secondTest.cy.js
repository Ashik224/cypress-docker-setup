describe('Neflix Homepage', () => {
  it('should visit Netflix', {tags: ['@high']}, () => {
    cy.visit('https://www.netflix.com')
    cy.log('Test Two completed!!')
    cy.wait(1000)
  })
  
  it('should visit Fast', {tags: ['@critical']}, () => {
    cy.visit('https://www.fast.com')
    cy.log('Test Two completed!!')
    cy.wait(6000)
  })
})
