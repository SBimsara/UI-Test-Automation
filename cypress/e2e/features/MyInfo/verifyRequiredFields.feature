Feature: Validate required fields on the Personal Details page

    Background:
        Given Admin is logged into the system

    Scenario: Admin fails to save Personal Details due to missing required fields
        Given Admin navigates to the "Personal Details" page
        When Admin clears the Full Name field
        And Admin clicks the Save button
        Then an error message should appear stating "Full Name is required"
        And the Personal Details should not be updated
