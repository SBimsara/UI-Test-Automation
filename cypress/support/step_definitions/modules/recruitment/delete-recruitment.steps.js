import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('User deletes the candidate record', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains(data.candidate.fullName).parents('.oxd-table-row').find('i.oxd-icon.bi-trash').click();
        cy.contains('button', 'Yes, Delete').click();
    });
})

Then('User should see "Successfully Deleted" message', () => {
    cy.contains('Successfully Deleted').should('be.visible');
});

When('User deletes the vacancy record', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('div[role="cell"]',data.vacancy.vacancyName1).parents('.oxd-table-row').find('i.oxd-icon.bi-trash').click();
        cy.contains('button', 'Yes, Delete').click();
    });
})