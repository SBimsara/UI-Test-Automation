Feature: My Leave Entitlements
    Background:
        Given User is logged in to search leave entitlements
        And add entitlement in-order maintain the flow
        
    Scenario: Apply leaves and check leave entitlement records
        When the user visits the Apply Leave page and applies leave
        And the user visits the My Leave Entitlement page
        And the user selects the Leave Period on the My Leave Entitlement page
        And the user clicks the Search button on the My Leave Entitlement page
        Then the leave entitlement page should display records instead of showing "No Records Found"
