class CreateUser {
    get createLink() {
        return $("#content > p:nth-child(5) > a");
      }

    get nameField() {
        return $("#employee_first_name");
    }

    get lastNameField() {
        return $("#employee_last_name");
    }

    get emailField() {
        return $("#employee_email");
    }

    get identificationField() {
        return $("#employee_identification");
    }

    get leaderField() {
        return $("#employee_leader_name");
    }

    get yearField() {
        return $("#employee_start_working_on_1i");
    }

    get year() {
        return $("#employee_start_working_on_1i > option:nth-child(1)");
    }

    get monthField() {
        return $("#employee_start_working_on_2i");
    }

    get month() {
        return $("#employee_start_working_on_2i > option:nth-child(1)");
    }

    get dayField() {
        return $("#employee_start_working_on_3i");
    }

    get day() {
        return $("#employee_start_working_on_3i > option:nth-child(24)");
    }

    get createButton() {
        return $("#new_employee > div.actions > input[type=submit]");
    }

    clickCreate(){
        this.createLink.click();
    }

    fillFields(){
        this.nameField.setValue("James");
        this.lastNameField.setValue("Smith");
        this.emailField.setValue("test@mai.com");
        this.identificationField.setValue("1234567890");
        this.leaderField.setValue("Luis Garcia");
        this.yearField.click();
        this.year.waitForDisplayed(2000);
        this.year.click();
        this.monthField.click();
        this.month.waitForDisplayed(2000);
        this.month.click();
        this.dayField.click();
        this.day.waitForDisplayed(2000);
        this.day.click();
        this.createButton.click();
    
    }

  }
    
    module.exports = new CreateUser();