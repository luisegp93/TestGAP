import { When } from "cucumber";
import inputUser from "../../support/actions/input"

When(/^The user enters "(.*)" into the Email field and password into the password field$/, keyword => {
  inputUser(keyword);
});

