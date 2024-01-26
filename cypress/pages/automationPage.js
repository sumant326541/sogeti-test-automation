//import { generateRandomUserData } from '../support/utils'
const { generateRandomUserData } = require('../support/utils');
class automationPage {
    get pageTitle() {
        return cy.get('div.page-heading > h1 > span');
    }
    get firstNameInput() {
        return cy.get('[name="__field_123927"]')
    }
    get lastNameInput() {
        return cy.get('[name="__field_123938"]')
    }
    get emailInput() {
        return cy.get('[name="__field_123928"]')
    }
    get phoneInput() {
        return cy.get('[name="__field_123929"]')
    }
    get companyInput() {
        return cy.get('[name="__field_132738"]')
    }
    get countryDropeDown() {
        return cy.get('[name="__field_132596"]')
    }
    get messageInput() {
        return cy.get('[name="__field_123931"]')
    }
    get iAgreeCheckBox() {
        return cy.get('span > label')
    }
    get iAmNotARobotCheckBox() {
        return cy.get('#recaptcha-anchor>div')
    }
    get submitBtn() {
        return cy.get('[name="submit"]')
    }

    get invalidCaptcahMessage() {
        return cy.get('.Form__Element.Form__CustomElement.FormRecaptcha.ValidationFail> span')
    }

    get ThankYouMessage() {
        return cy.get('.Form__Status__Message.Form__Success__Message > p')
    }

    clickIAmNotRobotCheckBox() {
        cy.get('iframe[title="reCAPTCHA"]')
            .its('0.contentDocument').should('exist')
            .its('body').should('not.be.undefined')
            .find('.recaptcha-checkbox-border').click()
    }

    submitForm() {
        const formData = generateRandomUserData();
        this.firstNameInput.type(formData.firstName)
        this.lastNameInput.type(formData.lastName)
        this.emailInput.type(formData.email)
        this.phoneInput.type(formData.phone)
        this.companyInput.type(formData.company)
        this.countryDropeDown.select('Argentina');
        this.messageInput.type(formData.message)
        this.iAgreeCheckBox.click()
        this.clickIAmNotRobotCheckBox()
        //cy.wait(60000); // uncomment if want to Verify captcha manually 
        this.submitBtn.click({ force: true })
    }

    verifySuccesfullSubmitForm() {
        this.ThankYouMessage.
            should('be.visible').
            should('have.text', 'Thank you for contacting us.');
    }


}
module.exports = new automationPage