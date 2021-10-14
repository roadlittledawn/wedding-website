import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";
import logoSrc from "../images/BrieClintonLockup.png";

const Logo = ({ color }) => (
  <div
    css={css`
      display: flex;
      align-items: center;

      > *:not(:first-child) {
        margin-left: 0.25em;
      }
      @media screen and (max-width: ${siteOptions.layout.mobileBreakpoint}) {
        font-size: 7vw;
        margin: 0.75em 1em 0 0;
      }
    `}
  >
    <img
      src={logoSrc}
      css={css`
        width: 100%;
      `}
    />
  </div>
);

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
