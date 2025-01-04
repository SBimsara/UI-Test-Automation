
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let firstName="";

Given('User is logged in in order to Apply Leave Functionality, successful Scenario', () => {
    cy.login();
});

Given('add entitlement', () => {
  cy.navigateToLeaveEntitlementPage();
  cy.searchEmployee();
  cy.addEntitlementDetails('CAN - FMLA', '2025', 30);
  cy.submitEntitlement();
});

Given('delete the leave list', () => {
  
  cy.visit('/web/index.php/leave/viewMyLeaveList');

  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input')
  //   .last()
  //   .should('be.visible')  // Ensure the element is visible
  //   .clear({ force: true })               // Clear the field
  //   .type('2025-01-01', { force: true });  // Type the date with force if needed

  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/input')
  //   .first()
  //   .should('be.visible')  // Ensure the element is visible       
  //   .clear({ force: true }) 
  //   .type('2025-31-12', { force: true });  // Type the date with force if needed

  // //set from date
  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input')
  //   .first().clear().type('2025-01-01').click(); 

  // //set to date
  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/input')
  //   .last().clear().type('2025-31-12').click(); 

  //remove rejected
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[1]/i').wait(500).click({ force: true });
  //remove cancelled
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[1]/i').wait(500).click({ force: true });
  //remove Sceduled
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[2]/i').wait(500).click({ force: true });
  //remove Taken
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[2]/i').wait(500).click({ force: true });

  //Click the Search button
  cy.get('[data-v-10d463b7]').contains('Search').click({ force: true }); 

  cy.get('.oxd-table-body').then((tableBody) => {
    if (tableBody.children().length === 0) {
      cy.log('The table body is empty');
    } else {
      cy.log('The table body is not empty');
      // No "No Records Found" text exists, proceed with deletion
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div[1]/div/div[1]/div/label/span/i').click({ force: true });
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click();
  
      // Click confirm to delete pending leave records
      cy.xpath('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]').click();
    }
  });
});



Given('the user navigates to the Apply Leave page', () => {
  cy.visit('/web/index.php/leave/applyLeave');
});


When('the user selects Leave from the Leave Type dropdown', () => {
  cy.get('.oxd-select-wrapper').click();  
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]').click();
  cy.get('.oxd-select-text-input').should('not.be.empty');
});

When('the user verifies the Leave Balance', () => {
  cy.get('.oxd-text oxd-text--p orangehrm-leave-balance-text').should('not.be.empty');
});

When('the user enters {string} as the From Date', (fromDate) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/input')
    .first().clear().type(fromDate).click(); 
});

When('the user enters {string} as the To Date', (toDate) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/input')
    .last().clear().type(toDate).click(); 
});

When('the user adds {string} in the Comments', (comment) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/div/div/div/div[2]')
    .should('be.visible').and('not.be.disabled').type(comment);
});

When('the user clicks the Apply button', () => {
  cy.get('button[type="submit"]').click();  
});

Then('the leave request should be submitted successfully', () => {
  cy.contains('Success').should('be.visible');
});
