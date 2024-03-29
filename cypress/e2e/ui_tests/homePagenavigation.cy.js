import home from '../../pages/homePage'
import automation from '../../pages/automationPage'
import data from '../../fixtures/testdata.json'

describe('Home Page Navigation', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('should verify the Services and Automation link are selected when navigating to "Services" and click on "Automation" Sub link', () => {
    home.clickAllowAllCookiesBtn()
    home.hoverOverServicesLink()
    home.clickAutomationLink()
    cy.url().should('eq', data.automationPageUrl);
    automation.pageTitle.should('have.text', 'Automation');
    cy.verifySelectedElementRgb(home.servicesLink, data.selectedelementrgbcolor) //custom command added in support/command.js
    home.hoverOverServicesLink()
    cy.verifySelectedElementRgb(home.automationLink, data.selectedelementrgbcolor)

  })

  it('should submit contact us form for automation', () => {
    home.clickAllowAllCookiesBtn()
    home.hoverOverServicesLink()
    home.clickAutomationLink()
    automation.submitForm() //captcha can not be automated, to verify captcah manuallay: a wait time can be set inside submitForm()
    //automation.verifySuccesfullSubmitForm() //uncomment if verifying captcha manully in above step
  })

  it('should verify all sogeti country list link inside worldwide', () => {
    home.clickAllowAllCookiesBtn()
    home.clickWorldwideLink()
    home.verifyListOfCountryDisplayed
  })

})