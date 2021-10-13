import React from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/react";
import { Link, withPrefix } from "gatsby";
// import FeatherIcon from "../Icons/FeatherIcon";
import { siteOptions } from "../../utils/constants";
import mountainsImage from "../../images/MountainFooter.png";

const Footer = ({ className }) => {
  const { layout } = siteOptions;
  return (
    <footer
      className={className}
      css={css`
        width: 100%;
        margin-top: 2em;
        display: flex;
      `}
    >
      <img
        src={mountainsImage}
        css={css`
          width: 100%;
        `}
      />
    </footer>
  );
};

Footer.propTypes = {
  profiles: PropTypes.array,
  className: PropTypes.string,
};

export default Footer;
