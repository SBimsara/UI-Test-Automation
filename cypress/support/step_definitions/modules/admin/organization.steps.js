import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
require('cypress-xpath');

Given('User navigates to the Organization functionality', () => {
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]')
        .click();
    cy.wait(1000);

    // click the General Information option
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[1]/a')
        .contains('General Information')
        .should('be.visible')
        .click({ force: true });
    cy.wait(3000);
});

When('User changes the {string} to {string}', (field, value) => {
    // Toggle the edit button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div/label/span')
        .should('be.visible')
        .click({ force: true });

    //Update the field
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]')
        .should('be.visible')
        .contains('label', field)
        .parent()
        .siblings('div')
        .find('input') 
        .should('be.visible')
        .clear()
        .type(value);

    // cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[2]/div/div[2]/input')
    //         .type(value);

    // Save the changes
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[7]/button')
        .should('be.visible')
        .click({ force: true });
});

Then('User should see the update success message', () => {
    cy.get('#oxd-toaster_1')
        .contains('p', 'Successfully Updated')
        .should('be.visible');
});


Given('User navigates to the Locations functionality', () => {
    //cy.wait(4000);
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]')
        .click();
    //cy.wait(1000);

    // click the General Information option
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[2]/nav/ul/li[3]/ul/li[2]/a')
        .contains('Locations')
        .should('be.visible')
        .click();
    //cy.wait(3000);
});

When('User adds a new location', function(dataTable) {
    // clicks the add button
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/div/button')
        .should('be.visible')
        .click({ force: true });
    //cy.wait(3000);

    dataTable.hashes().forEach((locationData) => {
        const { 'Name': name, 'City': city, 'State': state, 'Zip Code': zipCode, 'Country': country, 'Phone': phone, 'Fax': fax, 'Address': address } = locationData;

        // Interact with the form to create the location

        // input for Name
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/input')
            .type(name);

        // input for state
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input')
            .type(state);
        
        // input for Zip Code
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[3]/div/div[2]/input')
            .type(zipCode);

        // input for Country
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[4]/div/div[2]/div')
            .click();
        cy.contains('div', country) 
            .click();

        // input for City
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input')
            .type(city);
        
        // input for Phone
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[5]/div/div[2]/input')
            .type(phone);
        
        // input for Fax
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[6]/div/div[2]/input')
            .type(fax);

        // input for Address
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[7]/div/div[2]/textarea')
            .type(address);

    });

    // clicks the save button
    cy.get('button[type="submit"]').click();
});





