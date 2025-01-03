Feature: Employee Directory Search By Employee Name

  Background:
    Given login to visit the directory page and search employee by employee name

  Scenario: Search by Employee Name
    When enter employee name in the Employee Name field
    And  click on the Search button in-order to search employee by employee name
    Then should see a list of employees matching the name entered
