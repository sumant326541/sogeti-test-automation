class homePage {
    get allowAllCookiesBtn() {
        return cy.get('.acceptCookie');
    }

    get servicesLink() {
        return cy.contains('Services');
    }

    get automationLink() {
        return cy.contains('Automation');
    }



    clickAllowAllCookiesBtn() {
        this.allowAllCookiesBtn.click();
    }

    hoverOverServicesLink() {
        this.servicesLink.trigger('mouseover');
    }

    clickAutomationLink() {
        this.automationLink.click();
    }

}
module.exports = new homePage
