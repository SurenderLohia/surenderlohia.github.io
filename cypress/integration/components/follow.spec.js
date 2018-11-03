describe('Follow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('link to linked profile', () => {
    cy.checkLink('follow-on-linkedin', 'https://in.linkedin.com/in/surenderlohia')
   })
 
   it('link to twitter profile', () => {
     cy.checkLink('follow-on-twitter', 'https://twitter.com/surender_lohia')
   })
})