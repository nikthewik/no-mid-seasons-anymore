// Libraries
import React from "react";
import { Helmet } from "react-helmet";
// Components
import HomeText from "../components/HomeText/HomeText";

function Home(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>Home | NMSA</title>
      </Helmet>

      <HomeText />
    </>
  );
}

export default Home;
