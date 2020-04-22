import React, { useEffect } from "react";
import { initGA, logPageView } from "../utils/analytic";

export default (props) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return <>{props.children}</>;
};
