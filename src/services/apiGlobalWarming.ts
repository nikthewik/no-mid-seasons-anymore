// Libraries
import axios from "axios";
// Helpers
import formatTextForApi from "../helpers/formatTextForApi";

const BASE_URL = import.meta.env.VITE_BASE_API;

async function getData(chart: string | undefined | null) {
  const formattedChartName = formatTextForApi(chart);

  const data = await axios.get(BASE_URL + formattedChartName);
  return data;
}

export default getData;
