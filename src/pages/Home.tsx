// Libraries
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import HomeText from "../components/HomeText/HomeText";

function Home(): React.ReactElement {
  return (
    <HelmetProvider>
      <Helmet>
        <title>No Mid Seasons Anymore | NMSA</title>
      </Helmet>

      <HomeText />
    </HelmetProvider>
  );
}

export default Home;
