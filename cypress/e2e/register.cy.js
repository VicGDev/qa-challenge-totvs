import HomePage from '../pages/HomePage'
import SignupPage from '../pages/SignupPage'
import AccountPage from '../pages/AccountPage'

describe('User Registration', () => {
  it('should register a new user successfully', () => {

    const user = {
      name: 'Victor Test',
      email: `victor.test.${Date.now()}@mail.com`,
      password: 'Password123!',
      firstName: 'Victor',
      lastName: 'Test',
      address: 'Test Street 123',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      zipcode: '12345',
      mobile: '11999999999'
    }

    HomePage.visit()
    HomePage.clickSignupLogin()

    SignupPage.fillName(user.name)
    SignupPage.fillEmail(user.email)
    SignupPage.clickSignup()

    AccountPage.selectTitle()
    AccountPage.validateNameAndEmailAreFilled(user.name, user.email)

    AccountPage.fillPassword(user.password)
    AccountPage.selectDateOfBirth('1', 'January', '1995')

    AccountPage.fillFirstName(user.firstName)
    AccountPage.fillLastName(user.lastName)
    AccountPage.fillAddress(user.address)

    AccountPage.selectCountry(user.country)

    AccountPage.fillState(user.state)
    AccountPage.fillCity(user.city)
    AccountPage.fillZipcode(user.zipcode)
    AccountPage.fillMobileNumber(user.mobile)

    AccountPage.clickCreateAccount()

    AccountPage.validateAccountCreated()
  })
})