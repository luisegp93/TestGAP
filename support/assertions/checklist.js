import userListPage from "../../page_object/UserList";
import assert from "assert";


export default () => {
    userListPage.searchResultsLinks.forEach(link => {
      const linkText = link.getText();
      if (linkText) {
        assert(
          linkText.includes("Employee was successfully created."),
          `Link ${linkText} does not include "Employee was successfully created."`
        );
      }
    });
    userListPage.backs();
  };