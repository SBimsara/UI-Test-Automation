import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
const data = require('../../../fixtures/myInfoData.json').PersonalDetailsRequired;

When('Admin clears the "Full Name" field', () => {
  // Assuming "Full Name" is split into "First Name" and "Last Name" fields
  cy.get(data.fields.firstName)
    .should('be.visible')
    .clear()
    .should('be.empty');
  cy.get(data.fields.lastName)
    .should('be.visible')
    .clear()
    .should('be.empty');
});

When('Admin attempts to save the Personal Details', () => {
  cy.get(data.buttons.save)
    .should('be.visible')
    .click();
});

Then('an error message should appear stating that "Full Name is required"', () => {
  // Replace `data.messages.required` with the appropriate selector for the error message
  cy.get(data.messages.required)
    .should('be.visible')
    .and('contain.text', 'Required'); // Modify the text based on actual error
});

Then('the changes should not be saved', () => {
  // Verify the values are not updated on the page
  cy.get(data.fields.firstName).should('not.have.value', '');
  cy.get(data.fields.lastName).should('not.have.value', '');
});