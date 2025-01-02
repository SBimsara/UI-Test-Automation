import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User fills candidate search fields with valid data', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.jobTitle}$`)).click();
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.candidate.vacancy}$`)).click(); 
        cy.contains('label', 'Hiring Manager').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.get('div[role="listbox"]').contains(data.vacancy.hiringManager).click(); 
        cy.contains('label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.status).click(); 
        cy.get('input[placeholder="Type for hints..."]').type(data.candidate.firstName);
        cy.get('div[role="listbox"]').contains(data.candidate.fullName).click(); 
        cy.get('input[placeholder="Enter comma seperated words..."]').type(data.candidate.keywords);
        cy.contains('label', 'Method of Application').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.methodOfApplication).click(); 
        
    });
});    

When('User clicks on the "Search" button', () => {
    cy.get('button[type="submit"]').click();
})

Then('User should see the searched candidate records', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.get('div[role="cell"]').find('div').contains(data.candidate.fullName).should('be.visible');
        cy.contains(data.candidate.fullName).parents('.oxd-table-row').find('div').should('contain.text', data.candidate.vacancy)
        .and('contain.text', data.candidate.status)
    });
});

Given('User fills candidate search fields with invalid data', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.jobTitle}$`)).click(); 
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.candidate.vacancy}$`)).click(); 
        cy.contains('label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.status).click(); 
        cy.get('input[placeholder="Type for hints..."]').type(data.candidate.falseName);
        cy.get('input[placeholder="Enter comma seperated words..."]').type(data.candidate.keywords);
        cy.contains('label', 'Method of Application').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.methodOfApplication).click(); 
        
    });
});

Then('User should see "Invalid" under the search fields with invalid data', () => {
    cy.contains('Invalid').should('be.visible');
});

Given('User fills candidate search fields with data not availabe', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', 'Database Administrator').click(); 
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.candidate.vacancy}$`)).click(); 
        cy.contains('label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.status).click(); 
        cy.get('input[placeholder="Enter comma seperated words..."]').type(data.candidate.keywords);
        cy.contains('label', 'Method of Application').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.candidate.methodOfApplication).click(); 
        
    });
});

Then('User should see "No Records Found"', () => {
    cy.contains('No Records Found').should('be.visible');
});

Given('User fills vacancy search fields with valid data', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.vacancy.jobTitle).click(); 
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.vacancyName1}$`)).click(); 
        cy.contains('label', 'Hiring Manager').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.get('div[role="listbox"]').contains(data.vacancy.hiringManager).click(); 
        cy.contains('label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.vacancy.status).click();   
        
    });
});

Then('User should see the searched vacancy records', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.get('div[role="cell"]').find('div').contains(data.vacancy.vacancyName1).should('be.visible');
        cy.contains('div[role="cell"]',data.vacancy.vacancyName1).parents('.oxd-table-row').find('div').should('contain.text', data.vacancy.jobTitle)
        .and('contain.text', data.vacancy.hiringManager).and('contain.text', data.vacancy.status)
    });
});

Given('User fills vacancy search fields with data not availabe', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.vacancy.jobTitle).click(); 
        cy.contains('label', 'Vacancy').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.vacancyName3}$`)).click(); 
        cy.contains('label', 'Hiring Manager').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.get('div[role="listbox"]').contains(data.vacancy.hiringManager).click(); 
        cy.contains('label', 'Status').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', data.vacancy.status).click();   
        
    });
});