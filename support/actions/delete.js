import userListPage from "../../page_object/UserList";
import assert from "assert";

const actionOnRowData = (action) => {
  const rows = userListPage.searchResultTable;
  rows.forEach((row,rowIndex) => {
    const rowData = row.$$('td');
    rowData.forEach((column, columnIndex) => {
      action(column, rowIndex, columnIndex)
    })
  });
}

export default () => {
  actionOnRowData((column, rowIndex, columnIndex) => {
    if (columnIndex === 3) {
      const leaderName = column.getText();
      if (leaderName.includes("Luis Garcia")) {
        userListPage.deletes(rowIndex+1);
        console.log("Usuario creado en fila:", rowIndex);
        browser.acceptAlert();
      }
    }
  })
  actionOnRowData((column, rowIndex, columnIndex) => {
    if (columnIndex === 3) {
      console.log(column.getText());
      const leaderName = column.getText();
      assert(
        !leaderName.includes("Luis Garcia"),
        `Link ${leaderName} does not include "Luis Garcia"`
      );
    }
  })
}

