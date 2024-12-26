Feature: User Management

  Scenario: Create a new user
    Given User logged in as an admin
    And User navigates to the Admin module
    When User creates a new user
    | Username    | Password        | Role   | Employee Name                |
    | user5       | a123456         | ESS    | Timothy Lewis Amiano         |
    Then User should see the success message
