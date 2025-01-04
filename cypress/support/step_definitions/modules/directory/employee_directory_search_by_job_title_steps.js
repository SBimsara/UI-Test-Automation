import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('login to visit the employee directory page for job title search', () => {
  cy.login(); 
});

Given('Visit the employee directory page to search by job title', () => {
  cy.visit('/web/index.php/directory/viewDirectory');
});

When('User selelect HR Manager from the Job Title dropdown', () => {
  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]')
  // .click({ force: true });    
  
  // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div')
  // .contains('HR Manager')
  // .click({ force: true });

  cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
  cy.contains('div', 'HR Manager').click();
});

When('User click on the Search button to search employees by job title', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').wait(1000).click({ force: true });
});

Then('User should see a list of employees with the job title HR Manager', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').wait(1000).contains('HR Manager');
});
