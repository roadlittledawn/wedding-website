import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header";

import MobileNav from "../components/MobileNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          justify-content: flex-start;
        `}
      >
        <Header />
        <MobileNav />
        <Layout>
          <Layout.Main
            css={css`
              max-width: 1232px;
              margin: 0 auto;
              display: flex;
              align-items: center;
              flex-direction: column;
            `}
          >
            {children}
          </Layout.Main>
        </Layout>
        <Layout.Footer />
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
