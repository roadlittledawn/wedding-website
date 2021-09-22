import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header";

import MobileNav from "../components/MobileNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileNav />
      <Layout>
        <Layout.Main>{children}</Layout.Main>

        <Layout.Footer />
      </Layout>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
