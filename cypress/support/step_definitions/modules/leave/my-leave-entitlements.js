import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in to search leave entitlements', () => {
  cy.login(); 
});

Given('add entitlement in-order maintain the flow', () => {
  cy.navigateToLeaveEntitlementPage();
  cy.searchEmployee();
  cy.addEntitlementDetails('CAN - FMLA', '2025', 30);
  cy.submitEntitlement();
});

When('the user visits the Apply Leave page and applies leave', () => {
  cy.visit('/web/index.php/leave/applyLeave');
  cy.get('.oxd-select-wrapper').click();  
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]').click();
  cy.get('.oxd-select-text-input').should('not.be.empty');
  cy.get('.oxd-text oxd-text--p orangehrm-leave-balance-text').should('not.be.empty');
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input').first().clear().type('2024-03-12').click(); 
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input').last().clear().type('2024-04-12').click(); 
  cy.get('button[type="submit"]').click();  
});

When('the user visits the My Leave Entitlement page', () => {
    cy.visit('/web/index.php/leave/viewMyLeaveEntitlements');  
});


When('the user selects the Leave Period on the My Leave Entitlement page', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div')
      .should('be.visible') // Make sure the parent element is visible
      .within(() => {
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div')
          .click(); // Perform the click inside the scoped context
      });
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]')
      .first()  // Ensure only the first element is selected
      .should('be.visible')
      .within(() => {
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div')
          .contains('2024-01-01 - 2024-31-12', { timeout: 10000 }) // Add timeout for dynamic content
          .click();
      });
    
  });


When('the user clicks the Search button on the My Leave Entitlement page', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button').click();  
});

Then('the leave entitlement page should display records instead of showing "No Records Found"', () => {
    cy.contains('No Records Found').should('not.exist'); 
});
