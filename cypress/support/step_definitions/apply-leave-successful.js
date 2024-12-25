
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('User is logged in', () => {
    cy.login();
});

Given('the user navigates to the Apply Leave page', () => {
  cy.visit('/web/index.php/leave/applyLeave');
});

When('the user selects {string} from the Leave Type dropdown', (leaveType) => {
  cy.get('.oxd-select-wrapper').click();  
  cy.get('span[data-v-13cf171c=""]').click();
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

When('the user selects {string} from the Duration dropdown', (duration) => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/div/div/div[2]/i')
    .should('be.visible').type(duration).click(); 
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/div/div/div[1]')
    .should('not.be.empty');
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
