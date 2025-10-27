

Cypress.Commands.add('MakeTransfer', (OriginAcc, DestinyAcc, value) => {
    cy.SelectOptionCombobox('conta-origem', OriginAcc)
    cy.SelectOptionCombobox('conta-destino', DestinyAcc)

    cy.get('#valor').click().type(value)
    cy.contains('button', 'Transferir').click()


})