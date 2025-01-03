import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

Given('User logs for the claim modules for create claim', () => {
    cy.login();
});

Given('User navigates to the Claim modules for create claim', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the Submit Claim button for Claim Request', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/a') // Click Submit Claim button
        .should('be.visible')
        .click();
});



When('User selects an event from the dropdown  for Claim Request', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]') // Open Event dropdown
    .eq(0).click();

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div[2]')
        .should('be.visible')    
        .eq(0).click(); // Click the first selected item in the dropdown    
  
});




When('User selects a currency from the dropdown  for Claim Request', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]') // Open Currency dropdown
      .eq(0).click();

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div[2]')
      .should('be.visible')    
      .eq(0).click(); // Click the first selected item in the dropdow

});

When('User adds remarks as a description  for Claim Request', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/textarea') // Add Remarks
        .type('Submitting a claim for accommodation expenses.');
});

When('User clicks on the Create button  for Claim Request', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]') // Click Create button
        .should('be.visible')
        .click();
});

Then('A success message should be displayed confirming the claim request was saved', () => {
    cy.get('#oxd-toaster_1') // Success message
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});
