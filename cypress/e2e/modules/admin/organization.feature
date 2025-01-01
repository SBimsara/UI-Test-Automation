Feature: Organization

    Scenario: Update the general information of the organization
        Given User logged in as an admin
        And User navigates to the Admin module
        And User navigates to the Organization functionality
        When User changes the "Fax" to "123456789"
        Then User should see the update success message

    Scenario: Add a new location
        Given User logged in as an admin
        And User navigates to the Admin module
        And User navigates to the Locations functionality
        When User adds a new location
        | Name         | City         | State | Zip Code | Country       | Phone        | Fax        | Address        |
        | New Location | Springfield  | IL    | 62701    | Sri Lanka     | 123-456-7890 | 123456789  | 1234 Elm St    |
        Then User should see the success message