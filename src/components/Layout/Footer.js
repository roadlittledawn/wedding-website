import React from "react";
import PropTypes from "prop-types";

import { css } from "@emotion/react";
import mountainsImage from "../../images/MountainFooter.png";

const Footer = ({ className }) => {
  return (
    <footer
      className={className}
      css={css`
        width: 100%;
        margin-top: auto;
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
