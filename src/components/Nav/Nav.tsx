// Libraries
import React from "react";
// Types
import { Children } from "../../types/ChildrenType";
// Style
import style from "./Nav.module.css";

function Nav({ children }: Children): React.ReactElement {
  return <nav className={style.nav}>{children}</nav>;
}

export default Nav;
