import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false, // enable logs
};

export const initFP = () => {
  ReactPixel.init('1217836451583731', options);
};

export const fbPageView = () => {
  ReactPixel.pageView();
};
