class Login {
    get url() {
      return "/";
    }

    get userField(){
        return $("#user_email");
    }

    get passwordField(){
        return $("#user_password");
    }

    get submitButton(){
        return $(".submit");
    }

    inputUser(keyword) {
        this.userField.waitForDisplayed(5000);
        this.userField.click();
        this.userField.setValue(keyword);
      }

    inputPass(){
        this.passwordField.waitForDisplayed(5000);
        this.passwordField.click();
        this.passwordField.setValue("12345678");
        this.submitButton.waitForDisplayed(5000);
        this.submitButton.click();
    }

}

module.exports = new Login();
