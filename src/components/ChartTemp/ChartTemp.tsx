// Libraries
import React from "react";
// Types
import { Temp } from "../../types/DataTypes";
// Components
import ChartLayout from "../ChartLayout/ChartLayout";

function ChartTemp({ data }: { data: Temp[] }): React.ReactElement {
  return (
    <ChartLayout
      data={data}
      dataKeyChart={"station"}
      XDataKey={"time"}
      strokeAreaClr={"var(--clr-r-1)"}
      fillAreaClr={"transparent"}
      XLabelValue={"Year"}
      YLabelValue={"°C"}
      YDataMin={-1.9}
      YDataMax={2.4}
    />
  );
}

export default ChartTemp;
