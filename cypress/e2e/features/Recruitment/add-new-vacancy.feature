Feature: Add New Vacancy

Background: 
    Given User is logged in
    And User navigates to the vacancy page
    
Scenario: User adds a new vacancy with mandatory fields
    Given User clicks on the "Add" button
    When User fills out the "Add Vacancy" form with mandatory fields
    And User clicks on the "Save" button
    Then User should see Successfully Saved message

Scenario: User adds a new vacancy without mandatory fields
    Given User clicks on the "Add" button
    When User fills out the "Add Vacancy" form without mandatory fields
    And User clicks on the "Save" button
    Then User should stay on "addJobVacancy" page   
    And User should see "Required" under the missing mandatory fileds
     
Scenario: User adds a new vacancy with already exist data
    Given User clicks on the "Add" button
    When User fills out the "Add Vacancy" form with already existing vacancy 
    And User clicks on the "Save" button
    Then User should stay on "addJobVacancy" page   
    And User should see "Already exists" under the "Vacancy Name" fileds      