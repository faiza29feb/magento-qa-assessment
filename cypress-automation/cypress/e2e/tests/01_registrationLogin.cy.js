import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import testData from '../../fixtures/testData.json'

describe('Registration and Login Flow', () => {
  const registerPage = new RegisterPage()
  const loginPage = new LoginPage()

  it('should register a new user', () => {
    registerPage.visit()
    registerPage.fillRegistrationForm(testData.user)
    registerPage.submitForm()
    registerPage.verifySuccess()
  })

  it('should log in with newly registered user', () => {
    loginPage.visit()
    loginPage.login(testData.user.email, testData.user.password)
    loginPage.verifyLogin()
  })
})
