Feature: Apply Leave Functionality, successful Scenario

  Background:
    Given User is logged in in order to Apply Leave Functionality, successful Scenario
    And delete the leave list
    And add entitlement

  Scenario: User applies for leave successfully
    Given the user navigates to the Apply Leave page
    When the user selects Leave from the Leave Type dropdown
    And the user verifies the Leave Balance
    And the user enters "2025-01-04" as the From Date
    And the user enters "2025-01-05" as the To Date
    And the user adds "Vacation with family" in the Comments
    And the user clicks the Apply button
    Then the leave request should be submitted successfully


