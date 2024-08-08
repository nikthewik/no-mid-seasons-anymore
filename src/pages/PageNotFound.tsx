// Libraries
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Components
import Error from "../components/Error/Error";

function PageNotFound(): React.ReactElement {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404: Page Not Found | NMSA</title>
      </Helmet>

      <Error isError={false} />
    </HelmetProvider>
  );
}

export default PageNotFound;
