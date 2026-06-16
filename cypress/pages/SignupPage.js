class SignupPage {

  fillName(name) {
    cy.get('[data-qa="signup-name"]').type(name)
  }

  fillEmail(email) {
    cy.get('[data-qa="signup-email"]').type(email)
  }

  clickSignup() {
    cy.get('[data-qa="signup-button"]').click()
  }

}

export default new SignupPage()