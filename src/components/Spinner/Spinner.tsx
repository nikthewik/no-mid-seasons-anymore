// Libraries
import React from "react";
// Style
import style from "./Spinner.module.css";

function Spinner(): React.ReactElement {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
    </div>
  );
}

export default Spinner;
