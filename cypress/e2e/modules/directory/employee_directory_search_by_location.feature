Feature: Employee Directory Search By Location

    Background:
        Given login to visit the employee directory page for job title based search

    Scenario: Search by Location
        Given visit employee directory page in-order to search employee by location
        When user select Texas R&D from the Location dropdown in the Employee Directory
        And user clicks on the Search button to search employees by location
        Then user should see a list of employees located in Texas R&D in the Employee Directory
