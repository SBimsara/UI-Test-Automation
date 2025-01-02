Feature: Add New Candidate

Background: 
    Given User is logged in
    Given User navigates to the recruitment page
    
Scenario: User adds a new candidate with mandatory fields
    Given User clicks on the "Add" button
    When User fills out the "Add Candidate" form with mandatory fields
    And User clicks on the "Save" button
    Then User should see "Successfully Saved" message

Scenario: User adds a new candidate without mandatory fields
    Given User clicks on the "Add" button
    When User fills out the "Add Candidate" form without mandatory fields
    And User clicks on the "Save" button
    Then User should not redirect to any other page   
    And User should see "Required" under the missing mandatory fileds
     