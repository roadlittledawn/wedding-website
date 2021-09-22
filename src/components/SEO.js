import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({ title, children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
        }
      }
    }
  `);

  const { defaultTitle, titleTemplate } = siteMetadata;

  return (
    <Helmet titleTemplate={titleTemplate}>
      <title>{title || defaultTitle}</title>
      <html lang="en" />
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SEO;
