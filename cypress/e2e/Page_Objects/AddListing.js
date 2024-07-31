const AddListingLocators = require("../Locators/AddListingLocators");

class AddListing {
    addReconnectListingBtn() {
        cy.get(AddListingLocators.addListing.ADD_RECONNECT_LISTING)
          .should('be.visible')
          .click();
        cy.xpath(AddListingLocators.addListing.VERIFY_ADD_RECONNECT_LISTING)
          .should('be.visible');
        cy.get(AddListingLocators.addListing.VERIFY_PMS_OPTION)
          .should('be.visible');
        cy.get(AddListingLocators.addListing.VERIFY_AIRBNB_VRBO_HOUFY_OPTION)
          .should('be.visible');
        cy.xpath(AddListingLocators.addListing.VERIFY_SELECT_YOUR_PMS_TEXT)
          .should('be.visible')
        cy.get(AddListingLocators.addListing.PMS_INPUT_BOX)
          .type("smoobu{enter}");
        cy.xpath(AddListingLocators.addListing.SELECT_SMOOBU_TEXT_FROM_DROPDOWN).click();
        cy.get(AddListingLocators.addListing.API_KEY_INPUT_BOX)
        .type("Smoobu api key");
        cy.get(AddListingLocators.addListing.SUBMIT_PMS_BUTTON).click();
        cy.get(AddListingLocators.addListing.TOAST_MESSAGE_BOX)
          .should('be.visible')
          .and('have.text', "Please re-check your API key(s) and try again");
    }
}
export default AddListing;