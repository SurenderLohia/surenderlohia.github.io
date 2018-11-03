describe('Project', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should open project modal', () => {
    cy.get('[data-cy=project-thumb-box]').eq(0).click()
    cy.get('[data-cy=project-datail').eq(0).should('have.be', 'visible')
    cy.get('.light-box-close-btn').click()
    cy.get('[data-cy=project-datail').eq(0).should('not.be', 'visible')
  })
})