import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

let firstName = '';

Given('User logs in as an admin for the claim modules', () => {
    cy.login('Admin', 'admin123'); // Login as admin
});

Given('User navigates to the Claim modules', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click();
});

When('User clicks on the My Claim button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/a') // Click My Claim button
        .should('be.visible')
        .click();
});

When('User selects an event from the dropdown', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div/div[1]') // Open Event dropdown
        .click();
    cy.contains('div', 'Accommodation') // Select "Accommodation"
        .should('be.visible')
        .click();
});

When('User clicks on the Search button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[1]/div[2]/form/div[3]/button[2]') // Click Search button
        .should('be.visible')
        .click();
});

Then('The results should be displayed in the claim table', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div[3]/div') // Claim table results
        .should('be.visible');
});

Then('A message "No records found" should be displayed if there are no claims', () => {
    cy.contains('p', 'No records found') // No records found message
        .should('be.visible');
});

Given('login to visit the directory page and search employee by employee name', () => {
    cy.login(); // Login to the application
});

When('enter employee name in the Employee Name field', () => {
    cy.visit('/web/index.php/admin/viewSystemUsers');

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[4]/div')
        .invoke('text')
        .then((text) => {
            firstName = text.split(' ')[0]; // Extract first name
            cy.log('First Name: ' + firstName);

            cy.visit('/web/index.php/directory/viewDirectory');

            cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
                .click()
                .type(firstName);

            cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
                .contains(firstName)
                .click();
        });
});

When('click on the Search button in-order to search employee by employee name', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click();
});

Then('should see a list of employees matching the name entered', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(firstName);
});
