import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

const Content = ({ className, children }) => {
  return (
    <article
      className={className}
      css={css`
        grid-area: content;
      `}
    >
      {children}
    </article>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Content;
