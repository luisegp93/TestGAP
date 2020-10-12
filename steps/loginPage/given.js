import { Given } from "cucumber";
import loginPage from "../../page_object/Login"
import goToURL from "../../support/actions/goToURL"

Given("An administrator logs into the aplication", () => {
  goToURL(loginPage.url);
});
