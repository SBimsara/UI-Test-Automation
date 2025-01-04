Feature: Verify upload functionality on the Personal Details page

  Background:
    Given Admin is logged into the system
    And Admin navigates to the "Personal Details" page

  Scenario: User uploads a file in the Personal Details section
    When the user clicks on the "Add" button in the Personal Details section
    And the file upload section is visible
    And the user clicks on the "Browse" button to upload a file
    And the user selects and uploads a file
    And the user clicks on the correct "Save" button in the Personal Details section
    Then the uploaded file should be displayed in the table
