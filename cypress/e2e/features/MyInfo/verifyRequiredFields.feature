Feature: Verify required fields on the Personal Details page

    Background:
        Given Admin is logged into the system
        Given Admin navigates to the "Personal Details" page
        
    Scenario: User fails to update personal details due to missing required fields (Full Name)
        When the user leaves the Full Name field blank
        And the user attempts to save the changes
        Then an error message should appear stating that Full Name is mandatory
        And the changes should not be saved
