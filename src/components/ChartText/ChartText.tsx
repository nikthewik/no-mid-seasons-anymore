// Libraries
import React from "react";
// Style
import style from "./ChartText.module.css";
// Data
import chartsText from "../../data/arrays/chartsText";

function ChartText({ chart }: { chart: string }): React.ReactElement {
  return (
    <p className={style.text}>
      {chartsText.find((item) => item.id === chart)?.caption}
    </p>
  );
}

export default ChartText;
