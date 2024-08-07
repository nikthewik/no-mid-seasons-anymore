// Libraries
import React from "react";
// Style
import style from "./Menu.module.css";
// Data
import menuLinks from "../../data/arrays/menuLinks";
// Components
import MenuLink from "../MenuLink/MenuLink";

function Menu(): React.ReactElement {
  return (
    <ul className={style.list}>
      {menuLinks.map((link) => {
        return <MenuLink key={link} text={link} page={link.toLowerCase()} />;
      })}
    </ul>
  );
}

export default Menu;
