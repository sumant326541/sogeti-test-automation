class automationPage {

    get pageTitle() {
        return cy.get('div.page-heading > h1 > span');
    }
}
module.exports = new automationPage

