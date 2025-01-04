import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

require('cypress-xpath');

Given('User logged in as an admin', () => {
    cy.login('Admin', 'admin123');
    //cy.wait(2000);
});

Given('User navigates to the Admin module', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a')
            .should('be.visible')
            .click();
    //cy.wait(1000);
});

When('User creates a new user', function(dataTable) {

    // clicks the add button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button')
        .should('be.visible')
        .click();
    //cy.wait(3000);

    

    dataTable.hashes().forEach((userData) => {
        
        const { Username, Password, Role, 'Employee Name': employeeName } = userData;
            
        // Interact with the application to create the user

        // dropdown for User Role
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]')
            .click();
        cy.contains('div', 'ESS')  // This will search for a div that contains the text 'ESS'
            .click();

        // input for employee name
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div/input')
            .type('T', {timeout: 5000});    

        cy.contains('div', 'Timothy Lewis Amiano')  // This will search for a div that contains the text 'Enabled'
            .click();

        // input for username
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input').type(Username);

        // dropdown for Status
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[1]')
            .click();
        cy.contains('div', 'Enabled')  // This will search for a div that contains the text 'Enabled'
            .click();
        
        // input for password
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input').type(Password);
        
        // input for confirm password
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input').type(Password);
            
        // Submit the form to create the user
        cy.get('button[type="submit"]').click();
    });

    
});

Then('User should see the success message', () => {
    cy.get('#oxd-toaster_1')
        .contains('p', 'Successfully Saved')
        .should('be.visible');
});



When('User deletes the user with username {string}', (username) => {
    // Search for the user
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input').type(username);
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click();
    //cy.wait(2000);

    // checking the user is available
    cy.get('.oxd-table')
        .contains('div', username)
        .should('be.visible')
        .click();
    //cy.wait(1000);

    // Click the delete button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[6]/div/button[1]')
        .should('be.visible')
        .click();

    // Confirm the deletion
    cy.xpath('/html/body/div/div[3]/div/div/div/div[3]/button[2]')
        .should('be.visible')
        .click();    
});

Then('User should see the success message for deletetion', () => {
    cy.get('#oxd-toaster_1')
        .contains('p', 'Successfully Deleted')
        .should('be.visible');
});