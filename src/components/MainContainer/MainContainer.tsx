// Libraries
import React from "react";
// Types
import { Children } from "../../types/ChildrenType";
// Style
import style from "./MainContainer.module.css";

function MainContainer({ children }: Children): React.ReactElement {
  return <main className={style.main}>{children}</main>;
}

export default MainContainer;
