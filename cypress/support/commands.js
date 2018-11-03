// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// for test links
Cypress.Commands.add("checkLink", (selector, expectedUrl) => {
  cy.get(`[data-cy=${selector}]`).should('have.attr', 'href')
      .then(href => {
        expect(href).to.contain(expectedUrl)
      })
})

// For test lightbox
Cypress.Commands.add("checkModal", (selector, modalSelector) => {
  cy.get(`[data-cy=${selector}]`).click()
  cy.get(`[data-cy=${modalSelector}]`).should('be.visible')
  cy.get('.light-box-close-btn').click()
  cy.get(`[data-cy=${modalSelector}]`).should('not.visible')
})




