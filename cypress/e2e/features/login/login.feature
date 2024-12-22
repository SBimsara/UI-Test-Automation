Feature: User Login

Scenario: User logs in with valid credentials
    Given User visits the login page
    When User enters valid credentials
    Then User should be redirected to the dashboard