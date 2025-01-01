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

require('cypress-xpath');

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

// handle the newly occured server error, when going in to myLeave page
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Request failed with status code 500')) {
      return false; 
    }
  });
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the AxiosError caused by "Request aborted"
    if (err.message.includes('Request aborted')) {
        return false; // Prevent Cypress from failing the test
    }
    return true; // Let Cypress fail for other errors
});


// Cypress.Commands.add('navigateToModule', (moduleName) => {
//     cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a')
//             .should('be.visible') // Ensure it's visible
//             .click();

    
// });


//Add entitlement
Cypress.Commands.add('navigateToLeaveEntitlementPage', () => {
    cy.visit('web/index.php/leave/viewLeaveList');
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]')
      .should('be.visible')
      .click();
  
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[1]/a')
      .should('be.visible')
      .click();
  });
  
  Cypress.Commands.add('searchEmployee', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/span/p')
      .invoke('text')
      .then((text) => {
        const firstName = text.split(' ')[0];
        cy.log('First Name: ' + firstName);
  
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div')
          .should('be.visible')
          .click()
          .type(firstName);
  
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div')
          .should('be.visible')
          .contains(firstName)
          .click();
      });
  });

  Cypress.Commands.add('addEntitlementDetails', (leaveType, dateRange, entitlementDays) => {

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/div/div').click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/div/div').wait(1000).contains(leaveType).click();
    
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/div/div').click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/div/div').wait(1000).contains(dateRange).click();
   
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[3]/div/div[2]/input')
      .click()
      .type(entitlementDays);
  });
  
  Cypress.Commands.add('submitEntitlement', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[4]/button[2]').click();
    cy.xpath('//*[@id="app"]/div[3]/div/div/div/div[3]/button[2]').click().wait(1000);
  });

