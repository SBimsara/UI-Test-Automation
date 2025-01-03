Feature: Handling Overlapping Leave Dates

  Background:
    Given User is logged in for handling overlapping leave dates scenario
    And add entitlement for handling overlapping leave dates scenario

  Scenario: User applies for overlapping leave dates
    Given the user is on the Apply Leave page, for overlapping leave dates
    When the user selects the Leave Type dropdown, for overlapping leave dates
    And the user enters "2024-01-03" as the From Date, for overlapping leave dates
    And the user enters "2024-01-03" as the To Date, for overlapping leave dates
    And the user clicks the Apply button, for overlapping leave dates
    When the user selects the Leave Type dropdown, for overlapping leave dates
    And the user enters "2024-01-03" as the From Date, for overlapping leave dates
    And the user enters "2024-01-03" as the To Date, for overlapping leave dates
    And the user clicks the Apply button, for overlapping leave dates
    Then an error message should be displayed indicating that the leave dates overlap, for overlapping leave dates

