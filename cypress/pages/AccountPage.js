class AccountPage {
  selectTitle() {
    cy.get('#id_gender1').check()
  }

  validateNameAndEmailAreFilled(name, email) {
    cy.get('[data-qa="name"]').should('have.value', name)
    cy.get('[data-qa="email"]').should('have.value', email)
  }

  fillPassword(password) {
    cy.get('[data-qa="password"]').type(password)
  }

  selectDateOfBirth(day, month, year) {
    cy.get('[data-qa="days"]').select(day)
    cy.get('[data-qa="months"]').select(month)
    cy.get('[data-qa="years"]').select(year)
  }

  fillFirstName(firstName) {
    cy.get('[data-qa="first_name"]').type(firstName)
  }

  fillLastName(lastName) {
    cy.get('[data-qa="last_name"]').type(lastName)
  }

  fillAddress(address) {
    cy.get('[data-qa="address"]').type(address)
  }

  selectCountry(country) {
    cy.get('[data-qa="country"]').select(country)
  }

  fillState(state) {
    cy.get('[data-qa="state"]').type(state)
  }

  fillCity(city) {
    cy.get('[data-qa="city"]').type(city)
  }

  fillZipcode(zipcode) {
    cy.get('[data-qa="zipcode"]').type(zipcode)
  }

  fillMobileNumber(mobileNumber) {
    cy.get('[data-qa="mobile_number"]').type(mobileNumber)
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click()
  }

  validateAccountCreated() {
    cy.get('[data-qa="account-created"]')
        .should('be.visible')
        .and('contain.text', 'Account Created!')
  }
}

export default new AccountPage()