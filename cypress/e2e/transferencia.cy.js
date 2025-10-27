describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.SuccessfulLogin()

    })

    it('Deve transferir quand informo dados e valor válidos', () => {
        cy.SelectOptionCombobox('conta-origem','Maria Oliveira')
        cy.SelectOptionCombobox('conta-destino','João da Silva')
        cy.SelectTransferValueConfirm('11')
        cy.CheckToastMessage('Transferência realizada!')
    })

     it.only('Deve apresentar error quando tentar transferir acima de 5000', () => {
        cy.MakeTransfer('Maria Oliveira', 'João da Silva', '5001')
        cy.CheckToastMessage('Autenticação necessária para transferências acima de R$5.000,00.')
    })

})