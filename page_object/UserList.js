class UserList {

    get searchResultTable() {
        const rows = $$("#content > table > tbody > tr");
        return rows;
      }

    get searchResultsLinks() {
        return $$("#notice");
      }

    get backButton(){
        return $("#content > a:nth-child(13)");
    }

    backs(){
        this.backButton.waitForDisplayed(5000);
        this.backButton.click();
    }

    deletes(index) {
        const deleteButton = $("tr:nth-child("+index+") > td:nth-child(9) > a");
        deleteButton.waitForDisplayed(5000);
        deleteButton.click();
    }
}
  
  module.exports = new UserList();