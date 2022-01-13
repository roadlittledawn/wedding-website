import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header";

import MobileNav from "../components/MobileNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileNav />
      <Layout>
        <Layout.Main
          css={css`
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          `}
        >
          {children}
        </Layout.Main>

        <Layout.Footer />
      </Layout>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
