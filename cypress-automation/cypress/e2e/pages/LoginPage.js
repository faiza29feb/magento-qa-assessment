class LoginPage {
  visit() {
    cy.visit('/customer/account/login/')
    cy.get('#email', { timeout: 10000 }).should('be.visible')
  }

  login(email, password) {
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('button[title="Sign In"]').should('be.visible').click()
  }

  verifyLogin() {
    cy.contains('Welcome').should('exist')
  }
}

export default LoginPage
