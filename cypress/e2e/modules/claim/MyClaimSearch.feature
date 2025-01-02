Feature: View My Claims in Claim Module
  As an admin user,
  I want to view my claims in the claim module,
  So that I can see the claims filtered by event type.

  Background:
    Given User logs in as an admin for the claim modules for View My Claims
    And User navigates to the Claim modules for View My Claims

  Scenario: Successfully view claims filtered by event type
    When User clicks on the My Claim button for View My Claims
    And User selects an event from the dropdown for View My Claims
    And User clicks on the Search button for View My Claims
    Then The results should be displayed in the claims table
