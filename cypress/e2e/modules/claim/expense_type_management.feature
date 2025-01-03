Feature: Expense Type Management in Claim Module
  As an admin user,
  I want to manage expense types in the claim module,
  So that new expense types can be added and tracked.

  Background:
    Given test User logs in as an admin for the claim modules for Expense Type Management
    And test User navigates to the Claim modules for Expense Type Management

  Scenario: adding Non Duplicated new expense type
    When test User clicks on the Configuration button for expense managemet 
    And test User clicks on the Expense Types button for Expense Type Management
    And test User clicks on the Add button for add expense for Expense Type Management
    And test User fills out the Expense Type and Description for Expense Type Management
    And test User clicks on the Save button for save expense type for Expense Type Management
    Then test A success message should be displayed confirming the expense type was saved

  Scenario: adding Duplicated new expense type
    When test User clicks on the Configuration button for expense managemet 
    And test User clicks on the Expense Types button for Expense Type Management
    And test User clicks on the Add button for add expense for Expense Type Management
    And test User fills out the Duplicated Expense Type and Description for Expense Type Management
    Then User should see "Already exists" under the Name field
    And test User clicks on the Save button for save expense type for Expense Type Management
    Then User should not redirect to any other page stay same page

