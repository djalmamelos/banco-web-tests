describe('Login', () => {
  it('Login com dados validos deve ter sucesso', () => {
    cy.visit('/')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    cy.contains('h4','Realizar Transferência').should('be.visible');
    
  })

    it('Login com dados validos deve ter falha', () => {
    cy.visit('/')
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.get('#login-section > .btn').click()
    // cy.contains('h4','Realizar Transferência').should('be.visible');
    cy.get('#toast-container div.red').should('have.text', 'Erro no login. Tente novamente.');
    })
})