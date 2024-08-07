// Libraries
import React from "react";
import { Helmet } from "react-helmet";
// Components
import Error from "../components/Error/Error";

function PageNotFound(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found | NMSA</title>
      </Helmet>

      <Error isError={false} />
    </>
  );
}

export default PageNotFound;
