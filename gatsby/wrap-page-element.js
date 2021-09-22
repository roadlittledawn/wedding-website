import React from "react";
import GlobalStyles from "../src/components/GlobalStyles";
import { siteOptions } from "../src/utils/constants";

const wrapPageElement = ({ element }) => {
  const { layout } = siteOptions;
  return (
    <>
      <GlobalStyles layout={layout} />
      {element}
    </>
  );
};

export default wrapPageElement;
