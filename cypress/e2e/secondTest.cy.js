describe('Neflix Homepage', () => {
  it('should visit Netflix', {tags: "High-Priority"}, () => {
    cy.visit('https://www.netflix.com')
    cy.log('Test Two completed!!')
    console.log('Test Two completed from console')
    cy.wait(1000)
  })
  
  it('should visit Fast', {tags: 'Critical-Path'}, () => {
    cy.visit('https://www.fast.com')
    cy.log('Test Fast completed!!')
    cy.wait(1000)
  })
})
