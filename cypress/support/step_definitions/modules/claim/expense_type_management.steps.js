

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

let expenseTypeWithTimestamp; // Variable to store the unique expense type name

// Background steps
Given('test User logs in as an admin for the claim modules for Expense Type Management', () => {
    cy.login('Admin', 'admin123'); // Login as admin
});

Given('test User navigates to the Claim modules for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

// Scenario: adding Non Duplicated new expense type
When('test User clicks on the Configuration button for expense managemet', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/span') // Click Configuration button
        .should('be.visible')
        .click();
});

When('test User clicks on the Expense Types button for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[1]/ul/li[2]/a') // Click Expense Types button
        .should('be.visible')
        .click();
});

When('test User clicks on the Add button for add expense for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[1]/button') // Click Add button
        .should('be.visible')
        .click();
});

When('test User fills out the Expense Type and Description for Expense Type Management', () => {
    const now = new Date();
    const formattedTimestamp = now.toLocaleString('en-US', {
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(/ /g, '-');

    expenseTypeWithTimestamp = `Week-Travel-${formattedTimestamp}`; // Unique expense type

    // Fill out Expense Type
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type(expenseTypeWithTimestamp, { timeout: 3000 });

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('Expenses incurred for business travel.', { timeout: 3000 });
});

When('test User clicks on the Save button for save expense type for Expense Type Management', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]') // Click Save button
        .should('be.visible')
        .click();
});

Then('test A success message should be displayed confirming the expense type was saved', () => {
    cy.get('#oxd-toaster_1') // Success message
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});

// Scenario: adding Duplicated new expense type
When('test User fills out the Duplicated Expense Type and Description for Expense Type Management', () => {
    // Use the previously created expense type name to simulate a duplicate
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[1]/div/div[2]/input')
        .type(expenseTypeWithTimestamp, { timeout: 3000 });

    // Fill out Description
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div/div[2]/textarea')
        .type('Duplicated expense type for testing.', { timeout: 3000 });
});

Then('User should see "Already exists" under the Name field', () => {
    cy.get('.oxd-input-field-error-message') // Use the specific class for the error message
      .should('have.text', 'Already exists') // Ensure the text is as expected
      .should('be.visible'); // Verify the element is visible
});

Then('User should not redirect to any other page stay same page', () => {
    cy.url().should('include', 'web/index.php/claim/saveExpense'); // Confirm URL stays on the expense type management page
});
