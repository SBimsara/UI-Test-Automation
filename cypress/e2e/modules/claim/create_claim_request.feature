Feature: Create Claim Request in Claim Module
  As an admin user,
  I want to create a claim request in the claim module,
  So that the claim can be recorded and processed.

  Background:
    Given User logs for the claim modules for create claim
    And User navigates to the Claim modules for create claim 

  Scenario: Successfully create a new claim request
    When User clicks on the Submit Claim button
    And User selects an event from the dropdown
    And User selects a currency from the dropdown
    And User adds remarks as a description
    And User clicks on the Create button
    Then A success message should be displayed confirming the claim request was saved
