describe('Main enu', () => {
  function shouldMatchNthHref(navIndex, expectedHref) {
    return cy.get('.main-menu-item').eq(navIndex).find('a').should('have.attr', 'href', expectedHref)
  }
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to home page', () => {
    shouldMatchNthHref(0, '/')
  })

  it('link to portfolio page', () => {
    shouldMatchNthHref(1, '/portfolio/')
  })

  it('link to blog page', () => {
    shouldMatchNthHref(2, '/blog/' )
  })
})