const locators = require('./homepage-locators')

class homePage {
    
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    clickSignInMenu() {
        cy.get(locators.menu_signup).click();
    }
}

module.exports = new homePage();
