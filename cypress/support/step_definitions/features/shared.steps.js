import { Given } from '@badeball/cypress-cucumber-preprocessor';

Given('Admin is logged into the system', () => {
  cy.login('admin', 'admin123');
});

Given('Admin navigates to the {string} page', (page) => {
  const pageMap = {
    'Personal Details': '/web/index.php/pim/viewPersonalDetails/empNumber/7',
    'Emergency Contacts': '/web/index.php/pim/viewEmergencyContacts/empNumber/7',
    'Dependents': '/web/index.php/pim/viewDependents/empNumber/7',
    'Qualifications': '/web/index.php/pim/viewQualifications/empNumber/7',
  };

  const pageUrl = pageMap[page];
  if (pageUrl) {
    cy.visit(pageUrl);
    cy.url().should('include', pageUrl);
  } else {
    throw new Error(`Page "${page}" is not defined in pageMap`);
  }
});
