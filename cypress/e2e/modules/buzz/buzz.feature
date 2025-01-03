Feature: Buzz Newsfeed addon

  Scenario: Navigate to Buzz page 
    Given User logged in as an admin for buzz
    And User navigates to the Buzz section
    When User comments on the comments box 
    And User clicks the Post button
    Then User checks his posted comment

  
