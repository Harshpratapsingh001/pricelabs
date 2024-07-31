/// <reference types = "Cypress" />
/// <reference types = "cypress-xpath" />

const MultiCalendarLocators = require('../Locators/MultiCalendarLocators');

const PriceLabsHomePage = require('../page_objects/PriceLabsHomePage');
const MultiCalendar = require('../page_objects/MultiCalendar');

describe("Pricing Dashboard", () => {
    beforeEach(() => {
        cy.fixture('login').then((user_Harsh) => {
            cy.login(user_Harsh.username, user_Harsh.password);
        })
    })

    it("Create Dummy Listing", () => {
        const priceLabsHomePage = new PriceLabsHomePage();

        priceLabsHomePage.createDummyListing();
    });
});