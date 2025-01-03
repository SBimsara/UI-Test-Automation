import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let fullName = ''; // Variable to store the full name

// Step 1: Log in as admin
Given('User logs in as an admin for the claim module', () => {
  cy.login(); // Custom command for login
});

// Step 2: Navigate to the system users page
Given('User navigates to the system users page', () => {
  cy.visit('/web/index.php/admin/viewSystemUsers');
});

// Step 3: Get the full name of the employee
Given('User gets the employee\'s full name', () => {
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[4]/div')
    .invoke('text')
    .then((text) => {
      fullName = text; // Store the full name
      cy.log('Extracted Full Name: ' + fullName); // Log the full name
    });
});

// Step 4: Navigate to the Claim module
Given('User navigates to the Claim module', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[11]/a') // Click Claim module
        .should('be.visible')
        .click(); // Cypress waits for the page to load
});

// Step 5: Navigate to the Assign Claim module
When('User navigates to the Assign Claim module', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[5]/a') // Click Assign Claim
        .should('be.visible')
        .click(); // Cypress waits for the page to load
});

// Step 6: Fill out the Assign Claim form and click Create
When('User fills out the Assign Claim form and clicks Create', function() {
  // Input for Employee Name (using fullName directly)
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div/div/input')
    .type(fullName, { timeout: 3000 }); // Use the full name variable
    cy.contains('div', fullName, { timeout: 3000 }).first().click();


  // Select claim type
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div/div')
    .eq(0).click();
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/div/div[2]/div[2]')
  .eq(0).click();

  // Select claim status
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div/div[1]')
    .eq(0).click();
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/div/div[2]/div[3]')
  .eq(0).click();

  // Add remarks
  cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div/div/div[2]/textarea')
    .type('Testing claim creation.');

  // Click Create button
  cy.contains('button', 'Create').should('be.visible').click();

  // Verify navigation after creation
  cy.url().should('include', '/assignClaim');
});

// Step 7: Verify success message
Then('User should see the success message for claim creation', () => {
  cy.get('#oxd-toaster_1')
    .contains('p', 'Successfully Saved')
    .should('be.visible');
});
