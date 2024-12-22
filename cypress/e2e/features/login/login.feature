Feature: User Login

Scenario: User logs in with valid credentials
    Given User visits the login page
    When User enters valid credentials
    Then User should be redirected to the dashboard

Scenario: User logs in with invalid credentials
    Given User visits the login page
    When User enters invalid credentials
    Then User should see an error message    