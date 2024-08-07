// Libraries
import React from "react";
// Types
import { Co2 } from "../../types/DataTypes";
// Components
import ChartLayout from "../ChartLayout/ChartLayout";

function ChartCo2({ data }: { data: Co2[] }): React.ReactElement {
  return (
    <ChartLayout
      data={data}
      dataKeyChart={"trend"}
      XDataKey={"year"}
      strokeAreaClr={"var(--clr-gy-1)"}
      fillAreaClr={"var(--clr-gy-1)"}
      XLabelValue={"Year"}
      YLabelValue={"ppm"}
      YDataMin={390}
      YDataMax={430}
    />
  );
}

export default ChartCo2;
