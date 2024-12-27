Feature: Job

  Scenario: Create a new Job Titile
    Given User logged in as an admin
    And User navigates to the Admin module
    And User navigates to the Job Titles functionality
    When User creates a new Job Title
    | Job Title    | Job Description        |
    | Job6         | Job Description 5      |
    Then User should see the success message

  Scenario: Create a new Pay Grade
    Given User logged in as an admin
    And User navigates to the Admin module
    And User navigates to the Pay Grade functionality
    When User creates the new Pay Grade
    | Pay Grade    | Currency        | Minimum | Maximum |
    | Grade 25     | LKR             | 5000    | 10000   |
    Then User should see the success message