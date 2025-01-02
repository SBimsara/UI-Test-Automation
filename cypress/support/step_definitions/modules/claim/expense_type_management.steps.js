import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

Given('User logs in as an admin for the claim modules for Expense Type Management', () => {
    cy.login('Admin', 'admin123'); // Login as admin
});

Given('User navigates to the Claim modules for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the Configuration button for expense managemet', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span') // Click Configuration button
        .should('be.visible')
        .click();
});

When('User clicks on the Expense Types button for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[2]/a') // Click Expense Types button
        .should('be.visible')
        .click();
});

When('User clicks on the Add button for add expense for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[1]/button') // Click Add button
        .should('be.visible')
        .click();
});

When('User fills out the Expense Type and Description for Expense Type Management', () => {
    // Fill out Expense Type
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type('Week Travel Expenses', { timeout: 3000 });

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('Expenses incurred for business travel.', { timeout: 3000 });
});

When('User clicks on the Save button for save expense type for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]') // Click Save button
        .should('be.visible')
        .click();
});

Then('A success message should be displayed confirming the expense type was saved', () => {
    cy.get('#oxd-toaster_1') // Success message
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});
