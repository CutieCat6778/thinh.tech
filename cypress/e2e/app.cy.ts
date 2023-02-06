export default describe('Get app', () => {
  it('passes', () => {

    const DEFAULT_URL = 'http://localhost:3000'

    cy.visit(DEFAULT_URL)
    
    cy.contains("Read more about me!").click()

    cy.url().should('include', '/about')

    cy.get("a").contains("Go back").click()

    cy.url().should("include", "/")
  })
})