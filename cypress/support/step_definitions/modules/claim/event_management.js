import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

Given('User logs  for the claim modules', () => {
    cy.login(''); 
});

Given('User navigates to the Claim module for event management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the Configuration button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span') // Click Configuration button
        .should('be.visible')
        .click();
});

When('User clicks on the Events button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[1]/a') // Click Events button
        .should('be.visible')
        .click();
});

When('User clicks on the Add button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[1]/button') // Click Add button
        .should('be.visible')
        .click();
});

When('User fills out the Event Name and Description', () => {
    // Fill out Event Name
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type('Annual Retreat', { timeout: 3000 });

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('This is a description for the annual retreat event.', { timeout: 3000 });
});

When('User clicks on the Save button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]') // Click Save button
        .should('be.visible')
        .click();
});

Then('A success message should be displayed confirming the event was saved', () => {
    cy.get('#oxd-toaster_1') // Success message
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});
