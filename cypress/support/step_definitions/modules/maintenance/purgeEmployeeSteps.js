import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

// Given('User logged in as an admin', () => {
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   cy.get('[name="username"]').type('Admin');
//   cy.get('[name="password"]').type('admin123');
//   cy.get('[type="submit"]').click();
//   cy.url().should('include', '/dashboard');
// });

When('User navigates to the Maintenance section', () => {
  cy.get('a[href*="maintenance"]').click();
});

When('enters valid admin credentials in the popup', () => {
  cy.get('input[name="password"]').type('admin123'); // Valid admin password
  cy.get('button[type="submit"]').contains('Confirm').click();
});

Then('User should see the "Purge Employee Records" page', () => {
  cy.contains('Purge Employee Records').should('be.visible');
});

When('User enters invalid admin credentials in the popup', () => {
  cy.get('input[name="password"]').type('wrongpassword'); // Invalid admin password
  cy.get('button[type="submit"]').contains('Confirm').click();
});

Then('User should see an error message indicating incorrect credentials', () => {
  cy.contains('Invalid credentials').should('be.visible'); // Adjust the text based on the actual error message
});
