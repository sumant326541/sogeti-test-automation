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

    get worldwideLink() {
        return cy.get('[aria-label="Worldwide"]')
    }
    get listOfCountryLink() {
        return cy.get('#country-list-id > ul > li > a')
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

    clickWorldwideLink() {
        this.worldwideLink.click();
    }

    verifyListOfCountryDisplayed() {
        this.listOfCountryLink.each(($link) => {
            // Get the href attribute of the current link
            cy.wrap($link).invoke('attr', 'href').then((href) => {
                cy.log(`The href attribute for this link is: ${href}`);
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200); // verify status code 200
                })
            })
        });
    }

}
module.exports = new homePage
