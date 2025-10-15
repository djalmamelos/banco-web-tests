describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('visita do site')
  })
  it('Login com dados validos deve ter sucesso', () => {

    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('digitar dados')
    cy.get('#login-section > .btn').click()
    cy.contains('h4','Realizar Transferência').should('be.visible');
    cy.screenshot('realizando login sucesso')
  })

    it('Login com dados validos deve ter falha', () => {
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.get('#login-section > .btn').click()
    cy.get('#toast-container').should('have.text', 'Erro no login. Tente novamente.');
    })
})