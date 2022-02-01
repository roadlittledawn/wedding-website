import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import Content from "./Content";
import Footer from "./Footer";
import Main from "./Main";

const Layout = ({ className, children }) => {
  return (
    <div
      className={className}
      css={css`
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: var(--site-max-width);
      `}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Layout.Content = Content;
Layout.Main = Main;
Layout.Footer = Footer;

export default Layout;
