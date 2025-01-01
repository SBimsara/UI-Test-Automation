Feature: Verify download functionality on the Personal Details page

  Background:
    Given Admin is logged into the system
    Given Admin navigates to the "Personal Details" page

  Scenario: User downloads a document from the Personal Details page
    When the user clicks on the download link or button in the Personal Details table
    Then the file "test.png" should be downloaded successfully
