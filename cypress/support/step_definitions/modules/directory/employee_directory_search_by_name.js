import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

let firstName = '';

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
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click({ force: true });
});

Then('should see a list of employees matching the name entered', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(firstName);
});
