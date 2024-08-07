// Libraries
import React from "react";
// Types
import { Methane } from "../../types/DataTypes";
// Components
import ChartLayout from "../ChartLayout/ChartLayout";

function ChartMethane({ data }: { data: Methane[] }): React.ReactElement {
  return (
    <ChartLayout
      data={data}
      dataKeyChart={"average"}
      XDataKey={"date"}
      strokeAreaClr={"var(--clr-gn-1)"}
      fillAreaClr={"var(--clr-gn-1)"}
      XLabelValue={"Year"}
      YLabelValue={"ppm"}
      YDataMin={1600}
      YDataMax={2000}
    />
  );
}

export default ChartMethane;
