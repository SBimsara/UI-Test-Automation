import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the user clicks on the download link or button in the Personal Details table', () => {
  
  cy.get('button.oxd-icon-button.oxd-table-cell-action-space i.bi-download') 
    .first()  
    .click();  
});

Then('the file "testfile.txt" should be downloaded successfully', () => {
  const downloadPath = 'cypress/downloads/testfile.txt';  

  cy.wait(2000);  
  cy.readFile(downloadPath).should('exist');
});