import React from "react";
import Slider from "../components/Slider";

export default () => {
  const data = require("../json/testimonal.json");

  return <Slider data={data} />;
};
