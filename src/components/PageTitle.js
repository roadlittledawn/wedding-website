import PropTypes from "prop-types";
import React from "react";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";

const PageTitle = ({ title }) => {
  return (
    <h1
      css={css`
        display: none;
        @media screen and (max-width: ${siteOptions.layout.mobileBreakpoint}) {
          display: block;
        }
      `}
    >
      {title}
    </h1>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
