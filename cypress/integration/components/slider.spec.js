describe('Slider', () => {
  function shouldShowNthSliderImage(index) {
    return cy.get('.swipe-wrap div').eq(index).find('img').should('be.visible');
  }
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('slider item length', () => {
    cy.get('.swipe-wrap div').should('have.length', 4)
  })

  it('should show first slider image', () => {
    shouldShowNthSliderImage(0)
  })

  it('on click slider next button, should show next image', () => {
    cy.get('#slider-next-btn').click({force: true})
    shouldShowNthSliderImage(1)
  })

  it('on click slider prev button, should show next image', () => {
    cy.get('#slider-prev-btn').click({force: true})
    shouldShowNthSliderImage(3)
  })
})