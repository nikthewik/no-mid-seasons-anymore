// Types
import { ManagedData, ApiData, NewArctic } from "../types/DataTypes";

function manageApiData(data: ApiData, chart: string): ManagedData {
  const { result, methane, arcticData, co2, nitrous } = data.data;

  // Filtering Data
  if (chart === "temperature") return result;
  if (chart === "methane") return methane;
  if (chart === "co2") return co2;
  if (chart === "no2") return nitrous;

  // Managing Arctic Data
  const arcticKeys = Object.keys(arcticData.data);
  const newArcticData = arcticKeys
    .map((key: string) => {
      if (key === "198712" || key === "198801") {
        return delete arcticData.data[key];
      } else {
        return {
          date: key.slice(0, 4) + "." + key.slice(4, 6),
          value: arcticData.data[Number(key)].value,
        };
      }
    })
    .filter((item): item is NewArctic => !!item);

  // Filtering Arctic Data
  if (chart === "arctic") return newArcticData;
}

export default manageApiData;
