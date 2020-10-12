class Home {

    get banner() {
      return $("#content > p.flash_notice");
    }

    get welcome() {
        return $("#user_information > span");
    }

    get logo() {
        return $("#logo");
    }

    findElements() {
        this.banner.waitForDisplayed(5000);
        this.welcome.waitForDisplayed(5000);
        this.logo.waitForDisplayed(5000);
    }

}
  
  module.exports = new Home();