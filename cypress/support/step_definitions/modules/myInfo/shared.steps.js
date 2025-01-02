import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Admin is logged into the system', () => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name=username]').type('admin');
  cy.get('input[name=password]').type('admin123');
  cy.get('button[type=submit]').click();
  cy.url().should('include', '/web/index.php/dashboard');
});

Given('Admin navigates to the {string} page', (page) => {
  const pageMap = {
    'Personal Details': '/web/index.php/pim/viewPersonalDetails/empNumber/7'
  };

  const pageUrl = pageMap[page];
  if (!pageUrl) {
    throw new Error(`Page "${page}" is not defined in pageMap`);
  }

  cy.visit(pageUrl);
  cy.url().should('include', pageUrl);
});
