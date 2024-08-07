// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { MenuContext, FormContext } from "../../App";
// Style
import style from "./MenuLink.module.css";
// Helpers
import goToTop from "../../helpers/goToTop";

type Props = {
  page: string;
  text: string;
};

function MenuLink({ page, text }: Props): React.ReactElement {
  const menu = useContext(MenuContext);
  const form = useContext(FormContext);

  function handleClick(): void {
    goToTop();
    if (menu?.isOpen === true) menu?.toggleMenu();

    form?.setChart("temperature");
  }

  if (page !== "home") page = `charts/${page}`;

  return (
    <li className={style.listItem}>
      <Link to={page} onClick={handleClick} className={style.menuLink}>
        {text}
      </Link>
    </li>
  );
}

export default MenuLink;
