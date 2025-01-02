Feature: Update Personal Details

  Background:
    Given Admin is logged into the system
    Given Admin navigates to the "Personal Details" page

  Scenario: Admin updates personal details successfully
    When the Admin edits the First Name to "John"
    And the Admin edits the Last Name to "Doe"
    And the Admin clicks the Save button
    Then the changes should be saved successfully
