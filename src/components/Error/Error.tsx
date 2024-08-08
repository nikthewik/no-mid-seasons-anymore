// Libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
// Context
import { MenuContext, FormContext } from "../../App";
// Helpers
import goToTop from "../../helpers/goToTop";
// Style
import style from "./Error.module.css";
// Components
import Title from "../Title/Title";

function Error({ isError = true }: { isError?: boolean }): React.ReactElement {
  const menu = useContext(MenuContext);
  const form = useContext(FormContext);

  function handleClick(): void {
    goToTop();
    if (menu?.isOpen === true) menu?.toggleMenu();

    form?.setChart("temperature");
  }

  return (
    <HelmetProvider>
      {isError && (
        <Helmet>
          <title>OPS! Something went wrong... | NMSA</title>
        </Helmet>
      )}

      <div className={style.container}>
        <span className={style.error}>{isError ? "OPS!" : "404"}</span>
        <Title>{isError ? "Something went wrong." : "Page Not Found."}</Title>

        {isError ? (
          <>
            <p className={`${style.p} ${style.marginBtm}`}>
              Perhaps due to severe pollution, global warming, resource
              exploitation, economic disparity, or lack of sustainable policies
              for a stable future.
            </p>
            <p className={`${style.p} ${style.marginBtm}`}>
              Or maybe it's just an <strong>unexpected error</strong>.
            </p>
          </>
        ) : (
          <>
            <p className={`${style.p} ${style.marginBtm}`}>
              We could not find the page you were looking for.
            </p>
            <p className={`${style.p} ${style.marginBtm}`}>
              Maybe <strong>it never existed</strong>, just like the next human
              generation.
            </p>
          </>
        )}

        <p className={style.p}>
          Reload the page and if the problem persists, return to the homepage...
        </p>

        <div className={style.button}>
          <Link to="/home" onClick={handleClick}>
            BACK TO HOME
          </Link>
        </div>

        <p className={style.p}>...or try viewing another chart.</p>
      </div>
    </HelmetProvider>
  );
}

export default Error;
