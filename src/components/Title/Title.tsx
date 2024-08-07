// Libraries
import React from "react";
// Types
import { Children } from "../../types/ChildrenType";
// Style
import style from "./Title.module.css";

function Title({ children }: Children): React.ReactElement {
  return <h1 className={style.title}>{children}</h1>;
}

export default Title;
