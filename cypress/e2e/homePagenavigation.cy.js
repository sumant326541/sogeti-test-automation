import home from '../pages/homePage'
import automation from '../pages/automationPage'

describe('Home Page Navigation', () => {
  it('should verify the Services and Automation are selected when navigating to "Services" and click on "Automation" Sub link', () => {
    cy.visit('/')
    cy.viewport(1440, 900)
    home.clickAllowAllCookiesBtn()
    home.hoverOverServicesLink()
    home.clickAutomationLink()
    cy.url().should('eq', 'https://www.sogeti.com/services/automation/');
    automation.pageTitle.should('have.text', 'Automation');
    cy.verifySelectedElementRgb(home.servicesLink, 'rgb(255, 48, 76)')
    home.hoverOverServicesLink()
    cy.verifySelectedElementRgb(home.automationLink, 'rgb(255, 48, 76)')

  })

})