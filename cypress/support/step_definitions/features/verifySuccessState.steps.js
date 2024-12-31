import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the Admin edits the First Name to {string}', (firstName) => {
  cy.get('input[name="firstName"]').clear().type(firstName);
});

When('the Admin edits the Last Name to {string}', (lastName) => {
  cy.get('input[name="lastName"]').clear().type(lastName);
});

When('the Admin clicks the Save button', () => {
  cy.get('button[type="submit"]').first().click();
});

Then('the changes should be saved successfully', () => {
  cy.wait(2000); 
  cy.contains('Successfully Saved').should('be.visible');
});
