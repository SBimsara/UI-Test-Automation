// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => { 
    cy.visit('/web/index.php/auth/login');

    if(username && password) {
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
    }
    else{
        cy.fixture('users.json').then((users) => {
            cy.get('input[name=username]').type(users.valid.username)
            cy.get('input[name=password]').type(users.valid.password)
        });
    }
    cy.get('button[type=submit]').click();
});


Cypress.Commands.add('logout', () => {
    cy.get('.oxd-userdropdown-tab').should('be.visible').then(() => {
        // Click on the 'Welcome' dropdown
        cy.get('.oxd-userdropdown-tab').click();
        
         // Wait for the dropdown to open and ensure the Logout link is visible
        cy.get('.oxd-dropdown-menu', { timeout: 10000 }).should('be.visible');

        // Click the Logout link inside the dropdown
        cy.get('.oxd-dropdown-menu li').contains('Logout').should('be.visible').click();

    });
});