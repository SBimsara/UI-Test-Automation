import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the user clicks on the {string} button in the Personal Details section', (buttonText) => {
  cy.get('button.oxd-button--text')
    .contains(buttonText)
    .click();
});

When('the file upload section is visible', () => {
  cy.get('.oxd-file-div')
    .should('be.visible');
});

When('the user clicks on the {string} button to upload a file', (buttonText) => {
  cy.get('.oxd-file-button')
    .contains(buttonText)
    .click();
});

When('the user selects and uploads a file', () => {
  const filePath = 'testfile.txt';

  cy.get('input[type="file"]', { timeout: 5000 })
    .should('exist')
    .selectFile(`cypress/fixtures/${filePath}`, { force: true });
});

When('the user clicks on the correct "Save" button in the Personal Details section', () => {
 
  cy.get('.oxd-form-actions').each(($formAction) => {
    cy.wrap($formAction)
      .should('be.visible')
      .within(() => {
        
        cy.get('button')
          .contains('Save')
          .should('be.visible')
          .click();
      });
  });
});

Then('the uploaded file should be displayed in the table', () => {
  const uploadedFileName = 'testfile.txt';

  cy.get('.oxd-table-body', { timeout: 10000 })
    .should('be.visible')
    .and('contain.text', uploadedFileName);
});
