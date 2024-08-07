// Data
import MenuLinks from "./menuLinks";
// Helpers
import capitalizeLetter from "../../helpers/capitalizeLetter";

const formOptions: string[] = MenuLinks.slice(1, MenuLinks.length).map(
  (option) => {
    if (option === "CO2" || option === "NO2") {
      return option;
    } else {
      return capitalizeLetter(option);
    }
  }
);

export default formOptions;
