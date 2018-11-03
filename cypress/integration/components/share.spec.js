describe('Share', () => {
  function shouldShowNthSliderImage(index) {
    return cy.get('.swipe-wrap div').eq(index).find('img').should('be.visible');
  }
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to fb share', () => {
    cy.checkLink('share-in-fb', 'https://www.facebook.com/sharer/sharer.php?u=')
   })
 
   it('link to twitter share', () => {
     cy.checkLink('share-in-twitter', 'https://twitter.com/intent/tweet?text=')
   })
 
   it('link to google-plus share', () => {
     cy.checkLink('share-in-google-plus', 'https://plus.google.com/share?url=')
   })
})