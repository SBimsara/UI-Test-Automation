import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in to view the leave list', () => {
  cy.login(); 
});

Given('add entitlement add entitlement in order to View applied leave records in the My Leave List', () => {
  cy.navigateToLeaveEntitlementPage();
  cy.searchEmployee();
  cy.addEntitlementDetails('CAN - FMLA', '2025-01-01 - 2025-31-12', 30);
  cy.submitEntitlement();
});

Given('add some leave records', () => {
    cy.visit('/web/index.php/leave/applyLeave');
    cy.get('.oxd-select-wrapper').click();  
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]').click();
    cy.get('.oxd-select-text-input').should('not.be.empty');
    cy.get('.oxd-text oxd-text--p orangehrm-leave-balance-text').should('not.be.empty');
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input').first().clear().type('2024-03-12').click(); 
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input').last().clear().type('2024-04-12').click(); 
    cy.get('button[type="submit"]').click();  
    
});

Given('the user opens the My Leave List page', () => {
  cy.visit('/web/index.php/leave/viewMyLeaveList');
  cy.url().should('include', '/leave/viewMyLeaveList'); 
  cy.contains('My Leave List').should('be.visible'); 
});

  
When('the user sets the From Date as {string} of the My Leave List page search page', (fromDate) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input') 
    .last()
    .clear()
    .type(fromDate)
    .click();
});

When('the user sets the To Date as {string} of the My Leave List page search page', (toDate) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/input')
    .first()
    .clear()
    .type(toDate)
    .click(); 
});

When('the user clicks the Search button on the My Leave List page', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]') 
    .should('be.visible')
    .and('not.be.disabled')
    .click();
});

Then('the leave list should display records instead of showing No Records Found on the My Leave List page', () => {
    cy.contains('No Records Found').should('not.exist'); 
});