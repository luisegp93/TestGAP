import loginPage from "../../page_object/Login";

export default keyword => {
  loginPage.inputUser(keyword);
  loginPage.inputPass();
};

