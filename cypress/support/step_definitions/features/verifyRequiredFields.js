import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
const data = require('../../../fixtures/myInfoData.json').EmergencyContact;


When('Admin clicks the {string} button', (buttonName) => {
    if (buttonName === 'Add') {
      // Select the first "Add" button on the page
      cy.get('.oxd-button:contains("Add")').first().click();
    } else if (buttonName === 'Save') {
      cy.get('#btnSave').click();
    }

    if (!buttonSelectors[buttonName]) {
        throw new Error(`Button "${buttonName}" is not defined in selectors`);
      }
      
      cy.get(buttonSelectors[buttonName]).should('be.visible').click();
  });

When('Admin leaves the {string}, {string}, and {string} fields empty', (nameField, relationshipField, mobileField) => {
  const fieldSelectors = {
    'Name': data.fields.name,
    'Relationship': data.fields.relationship,
    'Mobile': data.fields.mobile,
  };

  [nameField, relationshipField, mobileField].forEach((field) => {
    const selector = fieldSelectors[field];
    if (!selector) {
      throw new Error(`Field "${field}" is not defined in selectors`);
    }
    cy.get(selector).clear();
  });
});

Then('error messages should be displayed for all required fields', () => {
  cy.get(data.messages.error).should('have.length', 3); // Assuming 3 required fields
  cy.get(data.messages.error).each(($error) => {
    cy.wrap($error).should('be.visible').and('not.be.empty');
  });
});
