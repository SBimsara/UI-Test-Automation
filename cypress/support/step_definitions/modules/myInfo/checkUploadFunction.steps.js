import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the user clicks on the {string} button in the Personal Details section', (buttonText) => {
  cy.get('button.oxd-button--text').contains(buttonText).click();
});

When('the file upload section is visible', () => {
  cy.get('.oxd-file-div').should('be.visible');
});

When('the user clicks on the {string} button to upload a file', (buttonText) => {
  cy.get('.oxd-file-button').contains(buttonText).click();
});

When('the user selects and uploads a file', () => {
  const filePath = 'testfile.txt'; // Ensure the file exists in `cypress/fixtures`

  // Force file upload even if the input is hidden
  cy.get('input.oxd-file-input', { timeout: 5000 })
    .should('have.length.at.least', 1)
    .selectFile(`cypress/fixtures/${filePath}`, { force: true });
});

When('the user clicks on the {string} button', (buttonText) => {
  cy.get('button').contains(buttonText).click();
});

Then('the uploaded file should be displayed in the table', () => {
  const uploadedFileName = 'testfile.png'; // Replace with the expected file name

  // Wait for the table to update and contain the new file name
  cy.get('.oxd-table-body', { timeout: 10000 }) // Adjust the timeout if necessary
    .should('be.visible')
    .and('contain.text', uploadedFileName);
});