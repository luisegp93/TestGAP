import { Then } from "cucumber";
import findElements from "../../support/assertions/assertion";

Then("The admin logged correctly into the application", () => {
  findElements();
  });