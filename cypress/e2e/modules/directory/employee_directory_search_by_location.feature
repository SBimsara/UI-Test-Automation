Feature: Employee Directory Search By Location

    Background:
        Given login to visit the employee directory page for job title search

  
    Scenario: Search by Location
        Given I am on the employee directory page in-order to search employee by location
        When I select Texas R&D from the Location dropdown in the Employee Directory
        And I click on the Search button to search employees by location
        Then I should see a list of employees located in Texas R&D in the Employee Directory
