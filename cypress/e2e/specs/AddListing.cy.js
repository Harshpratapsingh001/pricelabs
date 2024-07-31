/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

const AddListing = require("../page_objects/AddListing");

describe ("Add Listings", () => {
    before(() => {
        cy.fixture('login').then((user_Harsh) => {
            cy.login(user_Harsh.username, user_Harsh.password);
        });
    });

    it ("Add/Reconnect PMS Listings and entering incorrect API Key", () => {
        const addListing = new AddListing();

        cy.title().should('include', 'PriceLabs');
        addListing.addReconnectListingBtn();
    });
});