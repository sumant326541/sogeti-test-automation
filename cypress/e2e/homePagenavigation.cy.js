import home from '../pages/homePage'
import automation from '../pages/automationPage'

describe('Home Page Navigation', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('should verify the Services and Automation are selected when navigating to "Services" and click on "Automation" Sub link', () => {
    home.clickAllowAllCookiesBtn()
    home.hoverOverServicesLink()
    home.clickAutomationLink()
    cy.url().should('eq', 'https://www.sogeti.com/services/automation/');
    automation.pageTitle.should('have.text', 'Automation');
    cy.verifySelectedElementRgb(home.servicesLink, 'rgb(255, 48, 76)')
    home.hoverOverServicesLink()
    cy.verifySelectedElementRgb(home.automationLink, 'rgb(255, 48, 76)')

  })

  it('should submit contact us form for automation', () => {
    home.clickAllowAllCookiesBtn()
    home.hoverOverServicesLink()
    home.clickAutomationLink()
    automation.submitForm() //to verify captcah manuallay: a wait time is set for 60 sec inside submitForm()
    automation.verifySuccesfullSubmitForm()
  })

})