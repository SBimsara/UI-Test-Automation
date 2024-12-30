Feature: Verify success state after saving data

  Background:
    Given Admin is logged into the system

  Scenario: Verify success state when editing personal details
    Given Admin navigates to the "Personal Details" page
    When the admin updates the following fields:
      | Field         | New Value     |
      | First Name    | John          |
      | Last Name     | Doe           |
    And the admin clicks the "Save" button
    Then a success message "Successfully Saved" should be displayed
    And the updated details should be reflected on the page
