class UserList {

    get searchResultTable() {
        return $$("#content > table > tbody > tr:nth-child(3) > td:nth-child(4)");
      }

    get searchResultsLinks() {
        return $$("#notice");
      }

    get backButton(){
        return $("#content > a:nth-child(13)");
    }

    get deleteButton() {
        return $("tr:nth-child(3) > td:nth-child(9) > a");
    }

    backs(){
        this.backButton.waitForDisplayed(5000);
        this.backButton.click();
    }

    deletes() {
        this.deleteButton.waitForDisplayed(5000);
        this.deleteButton.click();
    }
}
  
  module.exports = new UserList();