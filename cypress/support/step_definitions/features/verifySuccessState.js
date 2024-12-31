import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
const data = require('../../../fixtures/myInfoData.json').PersonalDetails;

When('the admin updates the following fields:', (dataTable) => {
  dataTable.hashes().forEach((row) => {
    const fieldSelectors = {
      'First Name': data.fields.firstName,
      'Last Name': data.fields.lastName,
    };

    const fieldSelector = fieldSelectors[row.Field];
    if (fieldSelector) {
      cy.get(fieldSelector).should('be.visible').clear().type(row['New Value']);
    } else {
      throw new Error(`Field "${row.Field}" is not defined in fieldSelectors`);
    }
  });
});

When('the admin clicks the {string} button', (buttonName) => {
  const buttonSelectors = {
    Save: data.buttons.save,
  };

  const buttonSelector = buttonSelectors[buttonName];
  if (buttonSelector) {
    cy.intercept('POST', '**/personal-details**').as('saveDetails');
    cy.get(buttonSelector).should('be.visible').click();
    cy.wait('@saveDetails').its('response.statusCode').should('eq', 200);
  } else {
    throw new Error(`Button "${buttonName}" is not defined in buttonSelectors`);
  }
});

Then('a success message {string} should be displayed', (message) => {
  cy.get(data.messages.success)
    .should('be.visible')
    .and('contain.text', message);
});

Then('the updated details should be reflected on the page', () => {
  cy.get(data.fields.firstName).should('have.value', 'John');
  cy.get(data.fields.lastName).should('have.value', 'Doe');
});
