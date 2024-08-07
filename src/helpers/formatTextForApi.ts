type Params = string | undefined | null;

function formatTextForApi(text: Params): Params {
  switch (text) {
    case undefined:
      return undefined;
    case "no2":
      return "nitrous-oxide-api";
    default:
      return text + "-api";
  }
}

export default formatTextForApi;
