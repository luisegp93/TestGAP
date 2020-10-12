import { Given } from "cucumber";
import deletes from "../../support/actions/delete"

Given("The admin deletes the user", () => {
    deletes();
});
