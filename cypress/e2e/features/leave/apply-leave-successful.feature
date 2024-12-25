Feature: Apply Leave Functionality, successful Scenario

  Background:
    Given User is logged in

  Scenario: User applies for leave successfully
    Given the user navigates to the Apply Leave page
    When the user selects "Annual Leave" from the Leave Type dropdown
    And the user verifies the Leave Balance
    And the user enters "2024-31-12" as the From Date
    And the user enters "2024-31-12" as the To Date
    And the user selects "Full Day" from the Duration dropdown
    And the user adds "Vacation with family" in the Comments
    And the user clicks the Apply button
    Then the leave request should be submitted successfully


