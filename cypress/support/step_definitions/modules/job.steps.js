import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

require('cypress-xpath');

// Given('User logged in as an admin', () => {
//     cy.login('Admin', 'admin123');
//     cy.wait(2000);
// });

// Given('User navigates to the Admin module', () => {
//     cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a')
//             .should('be.visible')
//             .click();
//     cy.wait(1000);
// });

Given('User navigates to the Job Titles functionality', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]')
        .click();

    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[1]/a')
        .contains('Job Titles')
        .should('be.visible')
        .click();
    cy.wait(3000);
});

When('User creates a new Job Title', function(dataTable) {
    
    // clicks the add button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button')
        .should('be.visible')
        .click();
    cy.wait(3000);

    dataTable.hashes().forEach((jobTitleData) => {
        
        const { 'Job Title': jobTitle, 'Job Description': jobDescription } = jobTitleData;
            
        // Interact with the form to create the job title

        // input for Job Title
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/input').type(jobTitle);

        // input for Job Description
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/textarea')
            .type(jobDescription);
    });

    // clicks the save button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[5]/button[2]')
        .should('be.visible')
        .click();
});


Given('User navigates to the Pay Grade functionality', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]')
        .click();

    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[2]/ul/li[2]/a')
        .contains('Pay Grade')
        .should('be.visible')
        .click();
    cy.wait(3000);
});


When('User creates the new Pay Grade', function(dataTable) {

    // clicks the add button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div[1]/div/button')
        .should('be.visible')
        .click();
    cy.wait(3000);

    dataTable.hashes().forEach((payGradeData) => {

    const { 'Pay Grade': payGrade, 'Currency': currency, 'Minimum': min, 'Maximum':max } = payGradeData;

    // input for Pay Grade
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input').type(payGrade);

    // clicks the save button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]')
        .should('be.visible')
        .click();
    
    cy.wait(3000);

    // adding currency
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/div/div[1]/div/button')
        .should('be.visible')
        .click();
    cy.wait(2000);

    // input for currency
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[1]/div/div/div/div[2]/div')
        .click();

    cy.contains('div', currency)  // search for a div that contains the text 'USD'
        .click();
    
    // add minimum salary
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[1]/div/div[2]/input')
        .type(min);

    // add maximum salary
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[2]/div/div[2]/div/div[2]/input')
        .type(max);
    
    // save the currency
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div[2]/form/div[3]/button[2]')
        .click();
    });
});