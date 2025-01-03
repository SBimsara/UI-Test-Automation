import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
require('cypress-xpath');

let firstName = '';

Given('User logged in as an admin for buzz', () => {
    cy.login('Admin', 'admin123'); // Login as admin
});

Given('User navigates to the Buzz section', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[12]/a') // Click Claim module
        .should('be.visible')
        .click();
});

// When('User clicks on the comments box', () => {
//     cy.xpath('//*[@id="Buzz Newsfeed"]/div/div[1]/div[1]/div[2]/form/div/textarea') // Click My Claim button
//         .should('be.visible')
//         .click();
// });

When('User comments on the comments box', () => {

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div').click();

    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/textarea') // Open Event dropdown
        .type('This is a test comment!!');
        
    // cy.contains('div', 'Accommodation') // Select "Accommodation"
    //     .should('be.visible')
    //     .click();
});

When('User clicks the Post button', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/form/div/div/button') // Click Search button
        .click();
});

Then('User checks his posted comment', () => {
    cy.contains('This is a test comment!!') // Check if the comment is posted
        
});

// Then('A message "No records found" should be displayed if there are no claims', () => {
//     cy.contains('p', 'No records found') // No records found message
//         .should('be.visible');
// });

// Given('login to visit the directory page and search employee by employee name', () => {
//     cy.login(); // Login to the application
// });

// When('enter employee name in the Employee Name field', () => {
//     cy.visit('/web/index.php/admin/viewSystemUsers');

//     cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[4]/div')
//         .invoke('text')
//         .then((text) => {
//             firstName = text.split(' ')[0]; // Extract first name
//             cy.log('First Name: ' + firstName);

//             cy.visit('/web/index.php/directory/viewDirectory');

//             cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
//                 .click()
//                 .type(firstName);

//             cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div')
//                 .contains(firstName)
//                 .click();
//         });
// });

// When('click on the Search button in-order to search employee by employee name', () => {
//     cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/button[2]').click();
// });

// Then('should see a list of employees matching the name entered', () => {
//     cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div/div[2]').contains(firstName);
// });