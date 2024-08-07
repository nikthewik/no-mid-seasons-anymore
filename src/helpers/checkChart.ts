function checkChart(chart: string): boolean {
  switch (chart) {
    case "temperature":
    case "methane":
    case "arctic":
    case "co2":
    case "no2":
      return true;
    default:
      return false;
  }
}

export default checkChart;
