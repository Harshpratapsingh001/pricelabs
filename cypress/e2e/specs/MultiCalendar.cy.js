/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

const MultiCalendarLocators = require('../Locators/MultiCalendarLocators');

const PriceLabsHomePage = require('../page_objects/PriceLabsHomePage');
const MultiCalendar = require('../page_objects/MultiCalendar');
const { multiCalendar } = require('../Locators/MultiCalendarLocators');

describe("PriceLabs", () => {
    beforeEach(() => {
        cy.fixture('login').then((user_Harsh) => {
            cy.login(user_Harsh.username, user_Harsh.password);
        });
    })

    it("Navigate to MultiCalendar and add Last Booked Date metric", () => {
        const priceLabsHomePage = new PriceLabsHomePage();
        const multiCalendar = new MultiCalendar();

        priceLabsHomePage.navigateToMultiCalendar();
        multiCalendar.addMetrics();
    });

    it('Verify that the date range filter works correctly.', () => {
        // Navigate to the Multicalendar page.
        // Set a specific date range.
        // Verify that the calendar updates to display data only within the selected date range.

        const priceLabsHomePage = new PriceLabsHomePage();
        const multiCalendar = new MultiCalendar();

        priceLabsHomePage.navigateToMultiCalendar();

        let dateBefore;
        cy.get(MultiCalendarLocators.multiCalendar.DATE_TEXT)
            .invoke('text')
            .then((text) => {
                dateBefore = text.trim();
            });

        multiCalendar.selectDateRange(3, 20);

        cy.get(MultiCalendarLocators.multiCalendar.DATE_TEXT)
            .invoke('text')
            .then((text) => {
                const dateAfter = text.trim();
                assert.notEqual(dateAfter, dateBefore, "date is not set correctly")
            });
    });

    it('Verify search listing functionality', () => {
        const priceLabsHomePage = new PriceLabsHomePage();
        const multiCalendar = new MultiCalendar();

        priceLabsHomePage.navigateToMultiCalendar();
        multiCalendar.searchListing('Dummy Listing 2');
    });

    it('print names of all the parent and child listings', () => {
        const priceLabsHomePage = new PriceLabsHomePage();
        const multiCalendar = new MultiCalendar();

        priceLabsHomePage.navigateToMultiCalendar();
        multiCalendar.printallTheListings();
    });
});