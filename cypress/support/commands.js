// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
    * Verify selected element by RGB colour
    * @param ele selected element @param expectedRGB(e.g. rgb(255, 48, 76))
    * rgb converter link : https://convertingcolors.com/hex-color-FF304C.html?search=#ff304c
    */
Cypress.Commands.add('verifySelectedElementRgb', (ele, expectedRGB) => {
    ele.invoke('css', 'color').then((color) => {
        // Perform assertions on the color
        expect(color).to.equal(expectedRGB);
    });
})