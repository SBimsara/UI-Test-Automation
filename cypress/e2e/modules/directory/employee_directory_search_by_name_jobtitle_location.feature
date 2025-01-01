Feature: Employee Directory Search By Name, Job Title, and Location

  Background:
    Given login in-order to Search By Name, Job Title and Location

  Scenario: Search by Employee Name, Job Title, and Location
    Given Get employee name , job title and location
    Given Visit the employee directory page in-order to Search By Name, Job Title and Location
    When Enter the Employee Name 
    And Select Job title from the Job Title dropdown
    And Select Location from the Location dropdown
    And Click on the Search button
    Then Display a list of employees matching the name, job title and location
