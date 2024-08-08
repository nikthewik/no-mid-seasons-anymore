// Libraries
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import HomeText from "../components/HomeText/HomeText";
// Assets
import Preview from "../assets/img/preview-nmsa.jpg";

function Home(): React.ReactElement {
  return (
    <HelmetProvider>
      <Helmet>
        <title>No Mid Seasons Anymore | NMSA</title>
        {/* OPEN GRAPH PROTOCOL */}
        {/* Facebook */}
        <meta property="og:url" content="https://ntw-nmsa.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="No Mid Seasons Anymore" />
        <meta
          property="og:description"
          content="No Mid Seasons Anymore is a web app that provides data visualization and information about climate change."
        />
        <meta
          property="og:image:secure_url"
          content={Preview}
        />
        <meta
          property="og:image:alt"
          content="Homepage of No Mid Seasons Anymore"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ntw-nmsa.netlify.app" />
        <meta property="twitter:url" content="https://ntw-nmsa.netlify.app/" />
        <meta name="twitter:title" content="No Mid Seasons Anymore" />
        <meta
          name="twitter:description"
          content="No Mid Seasons Anymore is a web app that provides data visualization and information about climate change."
        />
        <meta name="twitter:image" content={Preview} />
      </Helmet>

      <HomeText />
    </HelmetProvider>
  );
}

export default Home;
