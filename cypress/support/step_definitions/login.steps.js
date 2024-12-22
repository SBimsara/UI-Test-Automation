import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('User visits the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('User enters valid credentials', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
});
  
Then('User should be redirected to the dashboard', () => {
    cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});