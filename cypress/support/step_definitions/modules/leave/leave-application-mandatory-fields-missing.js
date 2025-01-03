import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('add entitlement when one or more mandatory fields missing Scenario', () => {
  cy.navigateToLeaveEntitlementPage();
  cy.searchEmployee();
  cy.addEntitlementDetails('CAN - FMLA', '2025', 30);
  cy.submitEntitlement();
});

Given('User is logged in to check, one or more mandatory fields missing Scenario', () => {
    cy.login();
});

Given('the user opens the Apply Leave page', () => {
  cy.visit('/web/index.php/leave/applyLeave');
});

When('the user selects {string} as the Duration option', (duration) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/div/div/div[2]/i')
    .should('be.visible').type(duration).click(); 
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/div/div/div[1]')
    .should('not.be.empty');
});

When('the user enters {string} in the Comments section', (comment) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div/div/div[2]')
    .should('be.visible').and('not.be.disabled').type(comment);
});

When('the user attempts to submit the leave request', () => {
  cy.get('button[type="submit"]').click();  
});

Then('an error message should appear stating that Leave Type, From Date, and To Date are mandatory', () => {
  cy.contains('Required').should('be.visible');
});

Then('the leave request should not be processed', () => {
  cy.url().should('include', '/applyLeave');  // User remains on the Apply Leave page
});
