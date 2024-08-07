// Libraries
import React from "react";
// Types
import { NewArctic } from "../../types/DataTypes";
// Components
import ChartLayout from "../ChartLayout/ChartLayout";

function ChartArctic({ data }: { data: NewArctic[] }): React.ReactElement {
  return (
    <ChartLayout
      data={data}
      dataKeyChart={"value"}
      XDataKey={"date"}
      strokeAreaClr={"var(--clr-be-1)"}
      fillAreaClr={"var(--clr-be-1)"}
      XLabelValue={"Year"}
      YLabelValue={"M km²"}
      YDataMin={10}
      YDataMax={30}
    />
  );
}

export default ChartArctic;
