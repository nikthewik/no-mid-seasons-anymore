// Libraries
import React from "react";
// Types
import { No2 } from "../../types/DataTypes";
// Components
import ChartLayout from "../ChartLayout/ChartLayout";

function ChartNo2({ data }: { data: No2[] }): React.ReactElement {
  return (
    <ChartLayout
      data={data}
      dataKeyChart={"average"}
      XDataKey={"date"}
      strokeAreaClr={"var(--clr-br-1)"}
      fillAreaClr={"var(--clr-br-1)"}
      XLabelValue={"Year"}
      YLabelValue={"ppm"}
      YDataMin={310}
      YDataMax={345}
    />
  );
}

export default ChartNo2;
