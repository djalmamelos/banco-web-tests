describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.screenshot('visita do site')
  })
  it('Login com dados validos deve ter sucesso', () => {
    cy.SuccessfulLogin()
  })

  it('Login com dados validos deve ter falha', () => {
    cy.InvalidLogin()
    cy.CheckToastMessage('Erro no login. Tente novamente.')
    
  })
})