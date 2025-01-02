Feature: Event Management in Claim Module
  As an admin user,
  I want to manage events in the claim module,
  So that new events can be added and tracked.

  Background:
    Given  User logs  for the claim modules for Event Management
    And  User navigates to the Claim module for event management

  Scenario: Successfully add a new event
    When User clicks on the Configuration button for Event Management
    And User clicks on the Events button for Event Management
    And User clicks on the Add button for Event Management
    And User fills out the Event Name and Description for Event Management
    And User clicks on the Save button for Event Management
    Then A success message should be displayed confirming the event was saved
