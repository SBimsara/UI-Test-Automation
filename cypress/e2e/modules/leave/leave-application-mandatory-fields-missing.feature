Feature: Apply Leave with one or more mandatory fields missing 

    Background:
        Given User is logged in to check, one or more mandatory fields missing Scenario
        
    Scenario: User fails to apply for leave due to missing required fields (Leave Type, From Date, and To Date)
        Given the user opens the Apply Leave page
        And the user enters "Vacation with family" in the Comments section
        And the user attempts to submit the leave request
        Then an error message should appear stating that Leave Type, From Date, and To Date are mandatory
        And the leave request should not be processed