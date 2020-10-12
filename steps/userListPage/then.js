import { Then } from "cucumber";
import checkText from "../../support/assertions/checklist";

Then("The user list is checked", () => {
    checkText();
    });