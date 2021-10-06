import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";

const Logo = ({ color }) => (
  <div
    css={css`
      /* font-family: "Julius Sans One", sans-serif; */
      font-size: 4em;
      font-weight: 200;
      color: var(--color-red-400);
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
    <span>Brie </span>
    <span
      css={css`
        font-size: 1.5em;
        color: var(--color-red-200);
        opacity: 0.75;
      `}
    >
      &amp;
    </span>{" "}
    <span>Clinton</span>
  </div>
);

Logo.propTypes = {
  color: PropTypes.string,
};

export default Logo;
