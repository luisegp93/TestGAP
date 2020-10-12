Feature: Automation Test

  Scenario: The user logs into the aplication
    Given An administrator logs into the aplication
    When The user enters "gap-automation-test@mailinator.com" into the Email field and password into the password field
    Then The admin logged correctly into the application
    Given The admin goes to the create user page 
    Then The admin fill the fields and creates de user
    Then The user list is checked
    Given The admin deletes the user