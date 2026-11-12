describe('My first test', () => {
  it('visits the page and checks content', () => {
    cy.visit('https://example.cypress.io')
    cy.wait(2000)

    cy.contains('type').click()
    cy.wait(2000)

    cy.url().should('include', '/commands/actions')
    cy.wait(2000)

    cy.get('.action-email')
      .type('test@example.com', { delay: 200 })
    cy.wait(2000)

    cy.get('.action-email')
      .should('have.value', 'test@example.com')
    cy.wait(2000)
  })
})
