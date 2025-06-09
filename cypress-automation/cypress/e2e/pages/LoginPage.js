class LoginPage {
  visit() {
    cy.visit('/customer/account/login/')
  }

  login(email, password) {
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('button[title="Sign In"]').click()
  }

  verifyLogin() {
    cy.contains('Welcome').should('exist')
  }
}

export default LoginPage
