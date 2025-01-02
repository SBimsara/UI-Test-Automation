Feature: Event Management in Claim Module
  As an admin user,
  I want to manage events in the claim module,
  So that new events can be added and tracked.

  Background:
    Given  User logs  for the claim modules
    And  User navigates to the Claim module for event management

  Scenario: Successfully add a new event
    When User clicks on the Configuration button
    And User clicks on the Events button
    And User clicks on the Add button
    And User fills out the Event Name and Description
    And User clicks on the Save button
    Then A success message should be displayed confirming the event was saved
