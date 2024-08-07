// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { MenuContext, FormContext } from "../../App";
// Style
import style from "./Logo.module.css";
// Helpers
import goToTop from "../../helpers/goToTop";
// Assets
import LogoImg from "../../assets/img/logo.png";

function Logo(): React.ReactElement {
  const menu = useContext(MenuContext);
  const form = useContext(FormContext);

  function handleClick(): void {
    goToTop();
    if (menu?.isOpen === true) menu?.toggleMenu();

    form?.setChart("temperature");
  }

  return (
    <Link to="home" onClick={handleClick} className={style.logoLink}>
      <img src={LogoImg} className={style.logo} alt="Logo of NMSA" />
    </Link>
  );
}

export default Logo;
