import React, { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytic';
import { initFP, fbPageView } from '../utils/fbpixel';

export default (props) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    if (!window.FP_INITIALIZED) {
      initFP();
      window.FP_INITIALIZED = true;
    }
    fbPageView();
  }, []);
  return <>{props.children}</>;
};
