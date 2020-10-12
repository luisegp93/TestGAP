import userListPage from "../../page_object/UserList";
import assert from "assert";

export default () => {
    userListPage.deletes();
    browser.acceptAlert();
    userListPage.searchResultTable.forEach(link => {
        const linkText = link.getText();
        if (linkText) {
          assert(
            !linkText.includes("Luis Garcia"),
            `Link ${linkText} does not include "Luis Garcia"`
          );
        }
      });
}