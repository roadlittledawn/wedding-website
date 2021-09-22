import React from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/react";
import { Link } from "gatsby";
// import FeatherIcon from "../Icons/FeatherIcon";
import { siteOptions } from "../../utils/constants";

const Footer = ({ className }) => {
  const { layout } = siteOptions;
  return (
    <footer
      className={className}
      css={css`
        z-index: 1;
        position: relative;
        width: 100%;
        bottom: 0;
        color: var(--color-neutrals-600);
        @media screen and (max-width: ${layout.mobileBreakpoint}) {
          position: relative;
        }

        a {
          color: currentColor;
        }
      `}
    >
      Footer
    </footer>
  );
};

Footer.propTypes = {
  profiles: PropTypes.array,
  className: PropTypes.string,
};

export default Footer;
