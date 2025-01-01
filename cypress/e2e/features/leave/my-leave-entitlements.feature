Feature: My Leave Entitlements

    Scenario: Apply leaves and check leave entitlement records
        Given User is logged in to search leave entitlements
        When the user visits the Apply Leave page and applies leave
        And the user visits the My Leave Entitlement page
        And the user selects the Leave Period on the My Leave Entitlement page
        And the user clicks the Search button on the My Leave Entitlement page
        Then the leave entitlement page should display records instead of showing "No Records Found"
