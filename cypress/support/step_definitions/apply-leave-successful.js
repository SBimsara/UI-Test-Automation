
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in', () => {
    cy.login();
});

Given('delete the leave list', () => {
  
  cy.visit('/web/index.php/leave/viewMyLeaveList');

  //set from date
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input')
    .first().clear().type('2024-01-01').click(); 

  //set to date
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/input')
  .last().clear().type('2024-31-12').click(); 

  //remove rejected
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[1]/i').click();
  //remove cancelled
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[1]/i').click();
  //remove Sceduled
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[2]/i').click();
  //remove Taken
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/span[2]/i').click();

  //Click the Search button
  cy.get('[data-v-10d463b7]').contains('Search').click(); 

  cy.get('.oxd-table-body').then((tableBody) => {
    if (tableBody.children().length === 0) {
      cy.log('The table body is empty');
    } else {
      cy.log('The table body is not empty');
      // No "No Records Found" text exists, proceed with deletion
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/div[1]/div/div[1]/div/label/span/i').click();
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button').click();
  
      // Click confirm to delete pending leave records
      cy.xpath('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]').click();
    }
  });
});


Given('the user navigates to the Apply Leave page', () => {
  cy.visit('/web/index.php/leave/applyLeave');
});


When('the user selects {string} from the Leave Type dropdown', (leaveType) => {
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
