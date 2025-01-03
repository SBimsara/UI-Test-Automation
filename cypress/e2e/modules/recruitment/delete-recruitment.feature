Feature: Delete recruitment

Background: 
    Given User is logged in to the system
    Given User navigates to the recruitment page
    
Scenario: User deletes newly added candidate  
    Given User fills candidate search fields with valid data
    When User clicks on the "Search" button 
    Then User should see the searched candidate records 
    When User deletes the candidate record
    Then User should see "Successfully Deleted" message

Scenario: User deletes newly added vacancy 
    Given User navigates to the vacancy page
    And User fills vacancy search fields with valid data
    When User clicks on the "Search" button 
    Then User should see the searched vacancy records 
    When User deletes the vacancy record
    Then User should see "Successfully Deleted" message 