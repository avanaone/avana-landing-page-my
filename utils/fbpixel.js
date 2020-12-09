import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

export const initFP = () => {
  ReactPixel.init('434287979923319', options);
};

export const fbPageView = () => {
  ReactPixel.pageView();
};
