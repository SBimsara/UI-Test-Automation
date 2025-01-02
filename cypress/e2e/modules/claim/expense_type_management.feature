Feature: Expense Type Management in Claim Module
  As an admin user,
  I want to manage expense types in the claim module,
  So that new expense types can be added and tracked.

  Background:
    Given User logs in as an admin for the claim modules for Expense Type Management
    And User navigates to the Claim modules for Expense Type Management

  Scenario: Successfully add a new expense type
    When User clicks on the Configuration button for expense managemet 
    And User clicks on the Expense Types button for Expense Type Management
    And User clicks on the Add button for add expense for Expense Type Management
    And User fills out the Expense Type and Description for Expense Type Management
    And User clicks on the Save button for save expense type for Expense Type Management
    Then A success message should be displayed confirming the expense type was saved
