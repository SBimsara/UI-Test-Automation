import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in to view the leave list', () => {
  cy.login(); 
});

Given('add entitlement add entitlement in order to View applied leave records in the My Leave List', () => {
  cy.navigateToLeaveEntitlementPage();
  cy.searchEmployee();
  cy.addEntitlementDetails('CAN - FMLA', '2025', 30);
  cy.submitEntitlement();
});

Given('add some leave records', () => {
    cy.visit('/web/index.php/leave/applyLeave');
    cy.get('.oxd-select-wrapper').click();  
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]').click();
    cy.get('.oxd-select-text-input').should('not.be.empty');
    cy.get('.oxd-text oxd-text--p orangehrm-leave-balance-text').should('not.be.empty');
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input').first().clear().type('2025-03-12').click({ force: true }); 
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input').last().clear().type('2025-04-12').click({ force: true }); 
    cy.get('button[type="submit"]').click({ force: true });  
    
});

Given('the user opens the My Leave List page', () => {
  cy.visit('/web/index.php/leave/viewMyLeaveList');
  cy.url().should('include', '/leave/viewMyLeaveList'); 
  cy.contains('My Leave List').should('be.visible'); 
});

  
When('the user sets the From Date as {string} of the My Leave List page search page', (fromDate) => { 
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input') 
    .should('be.visible') // Ensure the input field is visible
    .invoke('val', '')    // Forcefully clear the value
    .type(fromDate, { force: true }) // Type the new value forcefully
    .should('have.value', fromDate); // Verify the new value is set
});

When('the user sets the To Date as {string} of the My Leave List page search page', (toDate) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/input')
    .should('be.visible') // Ensure the input field is visible
    .invoke('val', '')    // Forcefully clear the value
    .type(toDate, { force: true }) // Type the new value forcefully
    .should('have.value', toDate); // Verify the new value is set
});

When('the user clicks the Search button on the My Leave List page', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]') 
    .should('be.visible')
    .and('not.be.disabled')
    .click({ force: true });
});

Then('the leave list should display records instead of showing No Records Found on the My Leave List page', () => {
    cy.contains('No Records Found').should('not.exist'); 
});