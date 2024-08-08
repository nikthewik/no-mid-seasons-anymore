// Libraries
import React from "react";
// Types
import { Children } from "../../types/ChildrenType";
// Style
import style from "./HeaderNav.module.css";

function HeaderNav({ children }: Children): React.ReactElement {
  return (
    <header className={style.header}>
      <nav>
        {children}
      </nav>
    </header>
  )
}

export default HeaderNav;
