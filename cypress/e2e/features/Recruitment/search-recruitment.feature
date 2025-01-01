Feature: Search recruitment

Background: 
    Given User is logged in
    Given User navigates to the recruitment page
    
Scenario: User searches newly added recruitment with valid data  
    Given User fills search fields with valid data
    When User clicks on the "Search" button 
    Then User should see the searched records 

Scenario: User searches newly added recruitment with invalid data  
    Given User fills search fields with invalid data
    When User clicks on the "Search" button 
    Then User should see "Invalid" under the search fields with invalid data

Scenario: User searches a missing record   
    Given User fills search fields with data not availabe
    When User clicks on the "Search" button 
    Then User should see "No Records Found"     