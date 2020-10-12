import { Then } from "cucumber";
import fillFields from "../../support/actions/fill"

Then("The admin fill the fields and creates de user", () => {
    fillFields();
    });