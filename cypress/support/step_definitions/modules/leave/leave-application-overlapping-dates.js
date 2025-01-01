import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in for handling overlapping leave dates scenario', () => {
    cy.login();
});

Given('add entitlement for handling overlapping leave dates scenario', () => {
    cy.navigateToLeaveEntitlementPage();
    cy.searchEmployee();
    cy.addEntitlementDetails('CAN - FMLA', '2025-01-01 - 2025-31-12', 30);
    cy.submitEntitlement();
  });

Given('the user is on the Apply Leave page, for overlapping leave dates', () => {
    cy.visit('/web/index.php/leave/applyLeave');
});

When('the user selects the Leave Type dropdown, for overlapping leave dates', (leaveType) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i').click({ multiple: true });  
    cy.get('span[data-v-13cf171c=""]').click({ multiple: true });
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]').should('not.be.empty');
});

When('the user enters {string} as the From Date, for overlapping leave dates', (fromDate) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input')
        .first().clear().type(fromDate).click(); 
});

When('the user enters {string} as the To Date, for overlapping leave dates', (toDate) => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input')
        .last().clear().type(toDate).click(); 
});

When('the user clicks the Apply button, for overlapping leave dates', () => {
    
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/button').click();
});

Then('an error message should be displayed indicating that the leave dates overlap, for overlapping leave dates', () => {
    cy.contains('Overlapping Leave Request(s) Found').should('be.visible');
});
