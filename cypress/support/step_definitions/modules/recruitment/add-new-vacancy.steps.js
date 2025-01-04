import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User navigates to the vacancy page', () => {
    cy.get('nav').contains('Recruitment').click();
    cy.url().should('include', 'web/index.php/recruitment/viewCandidates');
    cy.get('a').contains('Vacancies').click();
    cy.url().should('include', 'web/index.php/recruitment/viewJobVacancy');
});

When('User fills out the "Add Vacancy" form with mandatory fields', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Vacancy Name').parents('.oxd-input-group').find('input').type(data.vacancy.vacancyName1); // For Vacancy Name
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.jobTitle}$`)).click();  // This will search for a div that contains the text 'Software Engineer'
        cy.get('textarea[placeholder="Type description here"]').type(data.vacancy.description);
        
        cy.get('@hiringManagerFirstAndLastName').then((fAndLName) => {
            const fullName = fAndLName; // Retrieve the name from the alias
            const [firstName, lastName] = fullName.split(' '); // Split into first and last names
            // Create a regex to match "FirstName [optional middle name] LastName"
            const nameRegex = new RegExp(`^${firstName}(?:\\s\\S+)?\\s${lastName}$`, 'i');
            
            cy.get('input[placeholder="Type for hints..."]').type(fullName); // Type the full name in the input
            cy.get('div[role="listbox"]').find('span').contains(nameRegex).click(); // Match and select using the regex
        });
        cy.contains('label', 'Number of Positions').parents('.oxd-input-group').find('input').type(data.vacancy.noOfPositions); // # of positions
    })
});

Then('User should see Successfully Saved message', () => {
    cy.intercept('POST', '/web/index.php/api/v2/recruitment/vacancies').as('saveRequest'); // Replace with your endpoint
    cy.wait('@saveRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); // Ensure save is successful
    });
});

When('User fills out the "Add Vacancy" form without mandatory fields', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Vacancy Name').parents('.oxd-input-group').find('input').type(data.vacancy.vacancyName2); // For Vacancy Name
        //cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        //cy.contains('div', new RegExp(`^${data.vacancy.jobTitle}$`)).click();  // This will search for a div that contains the text 'Software Engineer'
        cy.get('textarea[placeholder="Type description here"]').type(data.vacancy.description);
        //cy.get('input[placeholder="Type for hints..."]').type(data.vacancy.hiringManager);
        //cy.get('div[role="listbox"]').contains(data.vacancy.hiringManager);
        cy.contains('label', 'Number of Positions').parents('.oxd-input-group').find('input').type(data.vacancy.noOfPositions); // # of positions
    })
});

Then('User should stay on "addJobVacancy" page', () => {
    cy.url().should('include', 'web/index.php/recruitment/addJobVacancy')
});

When('User fills out the "Add Vacancy" form with already existing vacancy', () => {
    cy.fixture('recruitmentData.json').then((data) => {
        cy.contains('label', 'Vacancy Name').parents('.oxd-input-group').find('input').type(data.vacancy.vacancyName1); // For Vacancy Name
        cy.contains('label', 'Job Title').parents('.oxd-input-group').find('.oxd-select-text').click();
        cy.contains('div', new RegExp(`^${data.vacancy.jobTitle}$`)).click();  // This will search for a div that contains the text 'Software Engineer'
        cy.get('textarea[placeholder="Type description here"]').type(data.vacancy.description);
        cy.get('textarea[placeholder="Type description here"]').type(data.vacancy.description);
        
        //const fullName = data.vacancy.hiringManager;
        //const [firstName, lastName] = fullName.split(' '); // Split the full name into first and last name
        // Create a regex to match "FirstName [optional middle name] LastName"
        //const nameRegex = new RegExp(`^${firstName}(?:\\s\\S+)?\\s${lastName}$`, 'i');
        //cy.get('input[placeholder="Type for hints..."]').type(fullName);
        //cy.get('div[role="listbox"]').find('span').contains(nameRegex).click();
        
        cy.contains('label', 'Number of Positions').parents('.oxd-input-group').find('input').type(data.vacancy.noOfPositions); // # of positions
    })
});

Then('User should see "Already exists" under the "Vacancy Name" fileds', () => {
    cy.contains('label', 'Vacancy Name').parents('.oxd-input-group').find('span').contains('Already exists').should('be.visible');
})