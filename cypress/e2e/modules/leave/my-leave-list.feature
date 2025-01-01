Feature: My Leave List Functionality

    Background:
        Given User is logged in to view the leave list
        And add entitlement add entitlement in order to View applied leave records in the My Leave List
            
    Scenario: View applied leave records in the My Leave List
        Given add some leave records
        And the user opens the My Leave List page
        And the user sets the From Date as "2024-03-12" of the My Leave List page search page
        And the user sets the To Date as "2024-04-12" of the My Leave List page search page
        And the user clicks the Search button on the My Leave List page
        Then the leave list should display records instead of showing No Records Found on the My Leave List page
