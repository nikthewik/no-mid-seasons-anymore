// Libraries
import React from "react";
import { useMediaQuery } from "react-responsive";
// Types
import { Children } from "../../types/ChildrenType";

function Mobile({ children }: Children): React.ReactNode {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}

export default Mobile;
