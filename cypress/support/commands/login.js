Cypress.Commands.add('SuccessfulLogin', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.username)
        cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.get('#login-section > .btn').click()
    cy.contains('h4', 'Realizar Transferência').should('be.visible');

})

Cypress.Commands.add('InvalidLogin', () => {
    cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.invalida.username)
        cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.get('#login-section > .btn').click()

})