class HomePage {

  visit() {
    cy.visit('/')
  }

  clickSignupLogin() {
    cy.contains('Signup / Login').click()
  }

}

export default new HomePage()