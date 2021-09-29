import React from "react";
import LayoutContext from "./src/components/LayoutContext";
import { siteOptions } from "./src/utils/constants";

export const wrapRootElement = ({ element }) => {
  const { layout } = siteOptions;
  return (
    <LayoutContext.Provider value={layout}>{element}</LayoutContext.Provider>
  );
};

export { default as wrapPageElement } from "./gatsby/wrap-page-element";
export { default as onPreRenderHTML } from "./gatsby/on-pre-render";
