Feature: Expense Type Management in Claim Module
  As an admin user,
  I want to manage expense types in the claim module,
  So that new expense types can be added and tracked.

  Background:
    Given User logs in as an admin for the claim modules
    And User navigates to the Claim modules

  Scenario: Successfully add a new expense type
    When User clicks on the Configuration button
    And User clicks on the Expense Types button
    And User clicks on the Add button
    And User fills out the Expense Type and Description
    And User clicks on the Save button
    Then A success message should be displayed confirming the expense type was saved
