Feature: Claim Module

  Scenario: Create a new claim
    Given User logs in as an admin for the claim module
    And User navigates to the Claim module
    When User navigates to the Assign Claim module
    And User fills out the Assign Claim form and clicks Create
    Then User should see the success message for claim creation
