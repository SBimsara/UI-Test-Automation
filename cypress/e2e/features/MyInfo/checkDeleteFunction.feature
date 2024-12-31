Feature: Verify delete functionality on the Personal Details page

  Background:
    Given Admin is logged into the system
    Given Admin navigates to the "Personal Details" page

  Scenario: User deletes the file from the first row in the Personal Details table
    When the user clicks on the delete button in the first row of the Personal Details table
    And confirms the deletion
    Then the file should be deleted successfully
