describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
    cy.screenshot('visita do site')
  })
  it('Login com dados validos deve ter sucesso', () => {
  cy.fixture('credenciais').then(credenciais =>{
    cy.get('#username').click().type(credenciais.valida.username)
    cy.get('#senha').click().type(credenciais.valida.senha)
  })  
    cy.screenshot('digitar dados')
    cy.get('#login-section > .btn').click()
    cy.contains('h4','Realizar Transferência').should('be.visible');
    cy.screenshot('realizando login sucesso')
  })

    it('Login com dados validos deve ter falha', () => {
   cy.fixture('credenciais').then(credenciais =>{
    cy.get('#username').click().type(credenciais.invalida.username)
    cy.get('#senha').click().type(credenciais.invalida.senha)
  })  
    cy.get('#login-section > .btn').click()
    
    //Assertion
    cy.get('#toast-container').should('have.text', 'Erro no login. Tente novamente.');
    })
})