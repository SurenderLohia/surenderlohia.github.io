describe('Footer', () => {
  function shouldMatchNthHref(navIndex, expectedHref) {
    return cy.get('.main-menu-item').eq(navIndex).find('a').should('have.attr', 'href', expectedHref)
  }
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to jekyll', () => {
    cy.checkLink('jekyll', 'https://jekyllrb.com/')
  })

  it('link to github', () => {
    cy.checkLink('github', 'https://github.com/')
  })

  it('link to font awesome', () => {
    cy.checkLink('font-awesome', 'http://fontawesome.io')
  })

  it('link to font awesome svg', () => {
    cy.checkLink('font-awesome-svg', 'https://github.com/encharm/Font-Awesome-SVG-PNG')
  })
})