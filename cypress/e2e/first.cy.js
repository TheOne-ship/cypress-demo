describe('My first test', () => {
  it('visits the page and checks content', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('test@example.com')
      .should('have.value', 'test@example.com')
  })
})
