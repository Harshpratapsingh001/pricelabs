const MultiCalendarLocators = require('../Locators/MultiCalendarLocators');

class MultiCalendar {

    verifyMultiCalendarPage() {
        cy.get(MultiCalendarLocators.multiCalendar.MULTICALENDAR_HEADING)
            .should('have.text', 'Multi Calendar');
    }

    addMetrics() {
        cy.xpath(MultiCalendarLocators.multiCalendar.ADD_METRICS_BUTTON).click();
        cy.get(MultiCalendarLocators.multiCalendar.SELECT_METRIC_POPOVER)
            .should('be.visible');
        cy.get(MultiCalendarLocators.multiCalendar.METRICES)
            .should('be.visible');
        cy.xpath(MultiCalendarLocators.multiCalendar.ADD_METRIC).scrollIntoView().click();
        // cy.xpath(MultiCalendarLocators.multiCalendar.ADD_METRIC).click();
        cy.xpath(MultiCalendarLocators.multiCalendar.LAST_BOOKED_DATE_METRIC).click({ multiple: true });
        cy.xpath(MultiCalendarLocators.multiCalendar.UPDATE_CHANGES)
            .should('be.visible').click();
    }

    searchListing(listingname) {
        cy.get(MultiCalendarLocators.multiCalendar.SEARCH_LISTING_INPUT_BOX)
            .type(listingname);
        cy.get(MultiCalendarLocators.multiCalendar.SEARCH_LISTING_INPUT_BOX)
            .type('{enter}');
    }

    printallTheListings() {
        cy.get(MultiCalendarLocators.multiCalendar.LISTING_NAMES).each(($el, index, list) => {
            cy.log($el.text());
        });
    }

    selectDateRange(startDay, endDay) {
        const instanceOne = new Date();
        instanceOne.setDate(instanceOne.getDate() + startDay);
        const startingDay = instanceOne.getDate();
        const startingMonth = instanceOne.toLocaleDateString('default', { month: 'long' });
        const startingyear = instanceOne.getFullYear();

        const instanceTwo = new Date();
        instanceTwo.setDate(instanceTwo.getDate() + endDay);
        const endingDay = instanceTwo.getDate();
        const endingMonth = instanceTwo.toLocaleDateString('default', { month: 'long' });
        const endingyear = instanceTwo.getFullYear();

        const startDate = "(//*[contains(@aria-label,'" + startingMonth + " " + startingDay + "')])[1]";
        const endDate = "(//*[contains(@aria-label,'" + endingMonth + " " + endingDay + "')])[1]";

        cy.get(MultiCalendarLocators.multiCalendar.DATE_BUTTON).click();

        cy.xpath(MultiCalendarLocators.multiCalendar.DATE_CALENDAR)
            .should('be.visible');

        function navigateToTargetMonthYearStartDate() {
            cy.get(MultiCalendarLocators.multiCalendar.CALENDAR_HEADING_LS).then(($header) => {
                const displayedMonthYear = $header.text();
                console.log(displayedMonthYear);
                if (!displayedMonthYear.includes(startingMonth) || !displayedMonthYear.includes(startingyear)) {
                    cy.get(MultiCalendarLocators.multiCalendar.NEXT_CALENDAR_BUTTON).click();
                    navigateToTargetMonthYearStartDate();
                }
            });
        }
        navigateToTargetMonthYearStartDate();
        cy.xpath(startDate).click();

        function navigateToTargetMonthYearEndDate() {
            cy.get(MultiCalendarLocators.multiCalendar.CALENDAR_HEADING_RS).then(($header) => {
                const displayedMonthYear = $header.text();
                if (!displayedMonthYear.includes(endingMonth) || !displayedMonthYear.includes(endingyear)) {
                    cy.get(MultiCalendarLocators.multiCalendar.NEXT_CALENDAR_BUTTON).click();
                    navigateToTargetMonthYearEndDate();
                }
            });
        }
        navigateToTargetMonthYearEndDate();
        cy.xpath(endDate).click();
    }


}
export default MultiCalendar;