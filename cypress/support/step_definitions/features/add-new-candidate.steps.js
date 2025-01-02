import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User is logged in', () => {
  cy.login();
});

Given('User navigates to the recruitment page', () => {
    cy.get('nav').contains('Recruitment').click();
    cy.url().should('include', 'web/index.php/recruitment/viewCandidates');
});

Given('User clicks on the "Add" button', () => {
    cy.get('button').contains('Add').click();
});

When('User fills out the "Add Candidate" form with mandatory fields', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.get('input[name="firstName"]').type(data.candidate.firstName);
        cy.get('input[name="middleName"]').type(data.candidate.middleName);
        cy.get('input[name="lastName"]').type(data.candidate.lastName);
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.candidate.vacancy}$`)).click();  // This will search for a div that contains the text 'Software Engineer'
        cy.contains('label', 'Email').parents('.oxd-input-group').find('input').type(data.candidate.email); // For Email
        cy.contains('label', 'Contact Number').parents('.oxd-input-group').find('input').type(data.candidate.contactNumber); // For Contact Number
        cy.get('input[placeholder="Enter comma seperated words..."]').type(data.candidate.keywords);
        cy.get('textarea[placeholder="Type here"]').type(data.candidate.notes);
        cy.get('input[type="checkbox"]').parents('.oxd-checkbox-wrapper').find('span').click();
    })
});

When('User clicks on the "Save" button', () => {
    cy.get('button[type="submit"]').click();
});

Then('User should see "Successfully Saved" message', () => {
    cy.contains('Successfully Saved').should('be.visible');
})

When('User fills out the "Add Candidate" form without mandatory fields', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.get('input[name="firstName"]').type(data.candidate.firstName);
        cy.get('input[name="middleName"]').type(data.candidate.middleName);
        cy.get('input[name="lastName"]').type(data.candidate.lastName);
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.vacancy).click(); // This will search for a div that contains the text 'Software Engineer'
        //cy.contains('label', 'Email').parents('.oxd-input-group').find('input').type(data.candidate.email); // For Email
        cy.contains('label', 'Contact Number').parents('.oxd-input-group').find('input').type(data.candidate.contactNumber); // For Contact Number
        cy.get('input[placeholder="Enter comma seperated words..."]').type(data.candidate.keywords);
        cy.get('textarea[placeholder="Type here"]').type(data.candidate.notes);
        cy.get('input[type="checkbox"]').parents('.oxd-checkbox-wrapper').find('span').click();
    })
});

Then('User should not redirect to any other page', () => {
    cy.url().should('include', 'web/index.php/recruitment/addCandidate');
});

Then('User should see "Required" under the missing mandatory fileds', () => {
    cy.contains('span','Required').should('be.visible');
  });