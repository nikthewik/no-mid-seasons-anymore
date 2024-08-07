// Libraries
import React from "react";
import { Outlet } from "react-router-dom";
// Style
import style from "./AppLayout.module.css";
// Components
import Mobile from "../MediaQueries/Mobile";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import Desktop from "../MediaQueries/Desktop";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";
import MainContainer from "../MainContainer/MainContainer";
import Form from "../Form/Form";
import FooterContainer from "../FooterContainer/FooterContainer";

function AppLayout(): React.ReactElement {
  return (
    <div className={style.appContent}>
      <Mobile>
        <MobileNavbar />
      </Mobile>

      <Desktop>
        <DesktopNavbar />
      </Desktop>

      <MainContainer>
        <Outlet />
        <Form />
      </MainContainer>

      <FooterContainer />
    </div>
  );
}

export default AppLayout;
