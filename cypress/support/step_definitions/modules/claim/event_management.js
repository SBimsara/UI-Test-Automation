import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

let eventNameWithTimestamp;

Given('User logs  for the claim modules for Event Management', () => {
    cy.login();
});

Given('User navigates to the Claim module for event management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the Configuration button for Event Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span') // Click Configuration button
        .should('be.visible')
        .click();
});

When('User clicks on the Events button for Event Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[1]/a') // Click Events button
        .should('be.visible')
        .click();
});

When('User clicks on the Add button for Event Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[1]/button') // Click Add button
        .should('be.visible')
        .click();
});

When('User fills out the Event Name and Description for Event Management', () => {
    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-US', {
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(/ /g, '-'); 

    eventNameWithTimestamp = `Fridays-Trip-${formattedTimestamp}`; // Create unique event name

    // Fill out Event Name
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type(eventNameWithTimestamp, { timeout: 3000 });

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('Need some money for the arrangements.', { timeout: 3000 });
});

When('User clicks on the Save button for Event Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]') // Click Save button
        .should('be.visible')
        .click();
});

Then('A success message should be displayed confirming the event was saved', () => {
    cy.get('#oxd-toaster_1') // Success message
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});

When('User fills out the Duplicated Event Name and Description for Event Management', () => {
    // Use the previously saved event name
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type(eventNameWithTimestamp, { timeout: 3000 }); // Duplicate Event Name

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('Duplicated event for testing.', { timeout: 3000 });
});

Then('User should see "Already exists" under the Event Name field', () => {
    cy.get('.oxd-input-field-error-message') // Use the specific class for the error message
      .should('have.text', 'Already exists') // Ensure the text is as expected
      .should('be.visible'); // Verify the element is visible
});

Then('User should not redirect to any other page from saveEvents', () => {
    cy.url().should('include', 'web/index.php/claim/saveEvents'); // Confirm URL stays on the event management page
});
