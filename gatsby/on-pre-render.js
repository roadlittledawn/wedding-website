import React from "react";

const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents([
    ...getHeadComponents(),
    <link
      key="google-fonts"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-preconnect"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />,
    <link
      key="font-julius-sands"
      href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
      rel="stylesheet"
    />,
  ]);
};

export default onPreRenderHTML;
