import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('login to visit the employee directory page for job title search', () => {
  cy.login(); 
});

Given('I am on the employee directory page to search by job title', () => {
  cy.visit('/web/index.php/directory/viewDirectory');
});

When('I select HR Manager from the Job Title dropdown', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]')
  .click();    
  
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div')
  .contains('HR Manager')
  .click();
});

When('I click on the Search button to search employees by job title', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').wait(1000).click();
});

Then('I should see a list of employees with the job title HR Manager', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains('HR Manager');
});
