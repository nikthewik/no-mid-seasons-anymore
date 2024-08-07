// Libraries
import React from "react";
// Style
import style from "./Footer.module.css";

function Footer(): React.ReactElement {
  return (
    <footer className={style.footer}>
      Copyright © {new Date().getFullYear()}
      &nbsp;
      <a href="https://github.com/nikthewik" target="_blank">
        Nicola Pavoni
      </a>
      . All Rights Reserved.
    </footer>
  );
}

export default Footer;
