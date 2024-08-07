// Libraries
import React from "react";
// Style
import style from "./FooterContainer.module.css";
// Components
import FooterImg from "../FooterImg/FooterImg";
import Footer from "../Footer/Footer";

function FooterContainer(): React.ReactElement {
  return (
    <div className={style.footerContainer}>
      <FooterImg />
      <Footer />
    </div>
  );
}

export default FooterContainer;
