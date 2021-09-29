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
        width: 100%;
        margin-top: 2em 0;
        background: url("https://media-api.xogrp.com/images/2bf4f099-92a5-4864-8780-fbfea7e8030f")
            bottom left no-repeat,
          url("https://media-api.xogrp.com/images/bab0d90d-7c9b-41c9-9f4f-fa4be0c10e96")
            bottom right no-repeat,
          url("https://media-api.xogrp.com/images/2c46cfda-8f9d-4bfc-a5a7-bd8cf803e058")
            bottom center no-repeat,
          url("https://media-api.xogrp.com/images/30304a82-c097-4d61-8d43-25d9d4fbfd23")
            bottom left no-repeat,
          url("https://media-api.xogrp.com/images/4730a441-18b2-4e8c-b2c9-8f7a48986fe7")
            bottom right no-repeat;
        background-size: 20%, 20%, 80%, 30%, 50%;
        height: 45vw;
        max-height: 475px;
        min-width: 6em;
        display: flex;
        flex: 1;
        align-items: center;
      `}
    ></footer>
  );
};

Footer.propTypes = {
  profiles: PropTypes.array,
  className: PropTypes.string,
};

export default Footer;
