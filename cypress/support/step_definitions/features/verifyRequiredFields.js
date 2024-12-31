import {  When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the user leaves the Full Name field blank', () => {
  cy.get('input[name="firstName"]').clear();
  cy.get('input[name="middleName"]').clear();  
  cy.get('input[name="lastName"]').clear();   
});

When('the user attempts to save the changes', () => {
  cy.get('button[type="submit"]').first().click();
});

Then('an error message should appear stating that Full Name is mandatory', () => {
  cy.contains('Required').should('be.visible'); 
});

Then('the changes should not be saved', () => {
  cy.url().should('include', '/viewPersonalDetails'); 