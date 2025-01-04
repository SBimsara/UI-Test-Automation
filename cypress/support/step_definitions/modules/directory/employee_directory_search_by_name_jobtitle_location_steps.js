import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let name = '';
let jobTitle = '';
let location = '';

Given('login in-order to Search By Name, Job Title and Location', () => {
  cy.login();
});


Given('Get employee name , job title and location',() => {
    // Navigate to employee directory
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a').wait(1000).click();
    
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div/div/div[2]/div[1]/div[2]/input')
    .should('be.visible')   // Ensure the input field is visible
    .invoke('val')          // Get the value of the input field
    .then((value) => {
      name=value;
    });

    // Wait for job title field to load and get its value
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[6]/a').wait(1000).click({ force: true });
  
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]')
      .should('be.visible')
      .invoke('text')   // Use 'text' for non-input elements
      .then((text) => {
        jobTitle = text;
      });
  
    // Get location value
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div/div[1]')
      .should('be.visible')
      .invoke('text')   // Use 'text' to get the text content
      .then((text) => {
        location = text;
      });
  
    cy.log('name :', name); // Log the extracted value
    cy.log('jobTitle: ' + jobTitle);
    cy.log('location: ' + location);
    
});
  
Given('Visit the employee directory page in-order to Search By Name, Job Title and Location', () => {
  cy.visit('/web/index.php/directory/viewDirectory'); 
});

When('Enter the Employee Name', () => {

  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
  .click()
  .type(name);
        
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
  .contains(name)
  .click();

});

When('Select Job title from the Job Title dropdown', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]')
  .click({ force: true });    
  
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div')
  .contains(jobTitle)
  .click({ force: true });
});

When('Select Location from the Location dropdown', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]')
  .click({ force: true });    
  
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div')
  .contains(location)
  .click();
});

When('Click on the Search button', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').wait(1000).click({ force: true });
});

Then('Display a list of employees matching the name, job title and location', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(jobTitle);
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(location);
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(name);

});
