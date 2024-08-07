// Helpers
import capitalizeLetter from "./capitalizeLetter";

function manageTitle(title: string): string {
  if (title === "no2" || title === "co2") {
    return title.toUpperCase();
  } else {
    return capitalizeLetter(title);
  }
}

export default manageTitle;
