describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have title', () => {
    cy.title().should('eq', 'Surender Lohia - Front-end Developer')
  })

  it('should have intro name', () => {
    cy.get('h1.intro-name').contains("Surender Lohia")
  })

  it('link to current office', () => {
    cy.checkLink('current-office', 'https://www.thoughtworks.com/')
  })

  it('should open education modal', () => {
    cy.checkModal('btn-education', 'modal-education')
  })

  it('should open employment modal', () => {
    cy.checkModal('btn-employment', 'modal-employment')
  })

  it('link to resume pdf', () => {
    cy.checkLink('btn-resume', 'surender-lohia-resume.pdf')
  })

  it('should have skill set items', () => {
    cy.get('[data-cy=skill').should('have.length', 26)
  })

  it('should have recent projects', () => {
    cy.get('[data-cy=project-thumb-box').should('have.length', 2)
  })

  it('should have recent post', () => {
    cy.get('[data-cy=blog-list-item').should('have.length', 3)
  })
})