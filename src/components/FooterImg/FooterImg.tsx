// Libraries
import React from "react";
// Style
import style from "./FooterImg.module.css";
// Assets
import GlobalWarmingImg from "../../assets/img/img-global-warming.webp";

function FooterImg(): React.ReactElement {
  return (
    <img
      className={style.img}
      src={GlobalWarmingImg}
      alt="Illustration of the world burning on fire"
    />
  );
}

export default FooterImg;
