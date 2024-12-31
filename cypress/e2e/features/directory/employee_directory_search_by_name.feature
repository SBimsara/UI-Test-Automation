Feature: Employee Directory Search By Employee Name

  Background:
    Given login to visit the directory page and search employee by employee name

  Scenario: Search by Employee Name
    When enter employee name  in the Employee Name field
    And  click on the Search button in-order to search employee by employee name
    Then should see a list of employees matching the name entered


#   Scenario: Search by Location
#     Given I am on the employee directory page
#     When I select "Colombo" from the "Location" dropdown
#     And I click on the "Search" button
#     Then I should see a list of employees located in "Colombo"

#   Scenario: Search by Employee Name, Job Title, and Location
#     Given I am on the employee directory page
#     When I enter "Ahamed Nishath" in the "Employee Name" field
#     And I select "Software Engineer" from the "Job Title" dropdown
#     And I select "Colombo" from the "Location" dropdown
#     And I click on the "Search" button
#     Then I should see a list of employees matching the name "Ahamed Nishath", job title "Software Engineer", and location "Colombo"