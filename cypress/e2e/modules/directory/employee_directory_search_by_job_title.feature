Feature: Employee Directory Search By Job Title

  Background:
    Given login to visit the employee directory page for job title search

  Scenario: Search employees by Job Title HR Manager
    Given Visit the employee directory page to search by job title
    When User selelect HR Manager from the Job Title dropdown
    And User click on the Search button to search employees by job title
    Then User should see a list of employees with the job title HR Manager
