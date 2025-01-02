import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

Given('User logs in as an admin for the claim modules for View My Claims', () => {
    cy.login('Admin', 'admin123'); // Login as admin
});

Given('User navigates to the Claim modules for View My Claims', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the My Claim button for View My Claims', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/a') // Click My Claim button
        .should('be.visible')
        .click();
});

When('User selects an event from the dropdown for View My Claims', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]') // Open Event dropdown
        .click();
    cy.contains('div', 'Accommodation') // Select "Accommodation"
        .should('be.visible')
        .click();
});

When('User clicks on the Search button for View My Claims', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div[2]/form/div[3]/button[2]') // Click Search button
        .should('be.visible')
        .click();
});

Then('The results should be displayed in the claims table', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[3]/div') // Claims table
        .should('be.visible');
});
