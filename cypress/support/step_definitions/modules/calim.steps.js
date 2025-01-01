
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

Given('User logs in as an admin for the claim module', () => {
    cy.login('Admin', 'admin123'); // Cypress handles waiting for elements, so no need for `wait()`
});

Given('User navigates to the Claim module', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click(); // Cypress waits for the page to load
});

When('User navigates to the Assign Claim module', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[5]/a') // Click Assign Claim
        .should('be.visible')
        .click(); // Cypress waits for the page to load
});



When('User fills out the Assign Claim form and clicks Create', function() {
    // // Input for Employee Name
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div/div/input')
        .type('J', { timeout: 3000 });

        cy.contains('div', 'James Butler')  // This will search for a div that contains the text 'Enabled'
            .click();


    

    // Select Event from the dropdown
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/div[1]')
        .click();
    cy.contains('div', 'Accommodation')  // This will search for a div that contains the text 'Enabled'
        .click();

      

    // Select Currency from the dropdown
    cy.xpath(' //*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/div[1]')
    .click();
     cy.contains('div', 'Euro')  // This will search for a div that contains the text 'Enabled'
    .click();

    // Add Remarks
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/textarea')
        .type('Testing claim creation for John Doe.');


    // Click Create button
    cy.contains('button', 'Create')
        .should('be.visible')
        .click();

    // Wait for the page to load after clicking Create
    cy.url().should('include', '/assignClaim'); // Verify that we are on the Assign Claim page

    // Click the Submit button to assign the claim
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[9]/button[2]') // Update the XPath with the correct selector for the Submit button
        .should('be.visible') // Ensure the button is visible
        .click(); // Click the Submit button to assign the claim    

    
});


Then('User should see the success message for claim creation', () => {
    cy.get('#oxd-toaster_1')
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});