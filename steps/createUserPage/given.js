import { Given } from "cucumber";
import clickCreate from "../../support/actions/create"

Given("The admin goes to the create user page", () => {
    clickCreate();
  });