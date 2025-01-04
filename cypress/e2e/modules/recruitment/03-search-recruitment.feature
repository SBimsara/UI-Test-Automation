Feature: Search recruitment

Background: 
    Given User is logged in to the system
    Given User navigates to the recruitment page
    
Scenario: User searches newly added candidate with valid data  
    Given User fills candidate search fields with valid data
    When User clicks on the "Search" button 
    Then User should see the searched candidate records 

Scenario: User searches newly added candidate with invalid data  
    Given User fills candidate search fields with invalid data
    When User clicks on the "Search" button 
    Then User should see "Invalid" under the search fields with invalid data

Scenario: User searches a missing candidate record   
    Given User fills candidate search fields with data not availabe
    When User clicks on the "Search" button 
    Then User should see "No Records Found" 

Scenario: User searches newly added vacancy with valid data  
    Given User navigates to the vacancy page
    And User fills vacancy search fields with valid data
    When User clicks on the "Search" button 
    Then User should see the searched vacancy records

Scenario: User searches a missing vacancy record   
    Given User navigates to the vacancy page
    And User fills vacancy search fields with data not availabe
    When User clicks on the "Search" button 
    Then User should see "No Records Found"   