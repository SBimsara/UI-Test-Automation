Feature: Emergency Contact Page - Required Fields Validation

  Background:
    Given Admin is logged into the system

  Scenario: Verify required fields validation when adding an emergency contact
    Given Admin navigates to the "Emergency Contacts" page
    When Admin clicks the "Add" button
    And Admin leaves the "Name", "Relationship", and "Mobile" fields empty
    And Admin clicks the "Save" button
    Then error messages should be displayed for all required fields
