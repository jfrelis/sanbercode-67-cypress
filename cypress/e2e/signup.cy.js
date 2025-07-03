const homePage = require('../support/pageObjects/homePage/homePage');
const signupPage = require('../support/pageObjects/signupPage/signupPage');
const userData = require('../support/data/userData')
const { faker } = require('@faker-js/faker')


describe('Sign Up Feature', () => {
  beforeEach(() => {
    homePage.goToHomePage();
  })
  
  
  afterEach(() => {
    signupPage.clickSignUpButton();
  })

  it('User should be able to sign up with valid data', { tags: ['@TC0991'] }, () => {
      const randomUsername = faker.person.firstName() + '123';
      homePage.clickSignInMenu();
      signupPage.verifySignUpPageAppears();
      signupPage.inputUsername(randomUsername);
      signupPage.inputPassword(randomUsername);
  })

  // it('User should not be able to sign up with registered user', { tags: ['@TC0992'] }, () => {
  //     homePage.clickSignInMenu();
  //     signupPage.verifySignUpPageAppears();
  //     signupPage.inputUsername(userData.invalid_username);
  //     signupPage.inputPassword(userData.invalid_password);
  // })
})