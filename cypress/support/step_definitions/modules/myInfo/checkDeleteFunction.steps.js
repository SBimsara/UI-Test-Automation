import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('the user clicks on the delete button in the first row of the Personal Details table', () => {
  
  cy.get('.oxd-table-cell-actions button')
    .find('i.oxd-icon.bi-trash') 
    .first() 
    .click({ force: true }); 
});

When('confirms the deletion', () => {
  cy.get('button.oxd-button--label-danger') 
    .contains('Yes, Delete') 
    .click({ force: true }); 
});

Then('the file should be deleted successfully', () => {
  cy.wait(2000); 
  cy.get('.oxd-table-body').should('not.contain', 'sampleFile (2).jpeg');
});
