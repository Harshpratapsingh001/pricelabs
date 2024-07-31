const PriceLabsHomePageLocators = require('../Locators/PriceLabsHomePageLocators');

class PriceLabsHomePage {

    createDummyListing() {
        cy.get(PriceLabsHomePageLocators.priceHomePage.CREATE_DUMMY_LISTINGS_BUTTON)
        .should('be.visible').click();
        cy.xpath(PriceLabsHomePageLocators.priceHomePage.CREATE_DUMMY_LISTINGS_HEADING)
        .should('be.visible');
        cy.get(PriceLabsHomePageLocators.priceHomePage.LISTING_NAME)
        .clear()
        .should('have.value', '')
        .type("PriceLab Hotels");
        cy.get(PriceLabsHomePageLocators.priceHomePage.STREET_ADDRESS)
        .type("Saket")
        .should('have.value', 'Saket');
        cy.get(PriceLabsHomePageLocators.priceHomePage.CITY)
        .type("Delhi")
        .should('have.value', 'Delhi');
        cy.get(PriceLabsHomePageLocators.priceHomePage.ZIP)
        .type("10001")
        .should('have.value', '10001');
        cy.get(PriceLabsHomePageLocators.priceHomePage.COUNTRY)
        .type("INDIA")
        .should('have.value', 'INDIA');;
        cy.get(PriceLabsHomePageLocators.priceHomePage.BASE_PRICE)
        .type("300")
        .should('have.value', '300');;
        cy.get(PriceLabsHomePageLocators.priceHomePage.BEDROOM_COUNT_DROPDOWN)
        .should('be.visible')
        .click();
        cy.xpath("//span[text()='Studio']")
        .should('be.visible').click();
        cy.get(PriceLabsHomePageLocators.priceHomePage.CURRENCY_DROPDOWN).should('be.visible').click();
        cy.xpath("//span[text()='USD']").should('be.visible').click();
        cy.get(PriceLabsHomePageLocators.priceHomePage.CREATE_TEST_LISTING_BUTTON)
        .should('be.visible').click();

        cy.xpath(PriceLabsHomePageLocators.priceHomePage.VERIFY_LOCATION)
        .should('be.visible');
        cy.get(PriceLabsHomePageLocators.priceHomePage.CREATE_LISTING)
        .should('be.visible')
        .click();
    }

    navigateToMultiCalendar() {
        cy.get(PriceLabsHomePageLocators.priceHomePage.DYNAMIC_PRICING_DROPDOWN).click();

        cy.xpath(PriceLabsHomePageLocators.priceHomePage.MULTICALENDAR_OPTION)
        .should('have.attr', 'href')
        .and('include', 'multicalendar');

        cy.get(PriceLabsHomePageLocators.priceHomePage.MULTICALENDAR_LINK)
        .invoke('removeAttr', 'target').click();
    }
}
export default PriceLabsHomePage;