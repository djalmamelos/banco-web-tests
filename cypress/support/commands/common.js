Cypress.Commands.add('CheckToastMessage', (message) => {
cy.get('#toast-container').should('have.text', message)

})

Cypress.Commands.add('SelectOptionCombobox', (labelfield, Option) => {
    cy.get(`label[for=${labelfield}]`).parent().as(`campo-${labelfield}`)
    cy.get(`@campo-${labelfield}`).click()
    cy.get(`@campo-${labelfield}`).contains(Option).click()

})