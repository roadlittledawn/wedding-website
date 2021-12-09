import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";

const ThingsToDoPage = () => {
  return (
    <>
      <SEO title="Brie & Clinton | The Band" />
      <MainLayout>
        <h1>Things to do</h1>
        <h2>Portland</h2>
        <div
          css={css`
            max-width: 600px;
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              width: 100%;
              max-width: 100%;
            }
          `}
        >
          <p>
            If you're staying in Portland or find yourself there for a bit,
            here's a map of some of favorite spots
          </p>

          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1eHAPbxhehGH9bMpQP7r9Rz8DUblRqXkb"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
          />

          <h2>Willammette Valley / Wine Country</h2>
          <p>
            Many wineries/vineyards require making an appointment ahead of time.
          </p>
          <p>Check out our map of some of favorite places in wine country</p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1m01rbByDY0ojoYX2FFEePQxeiKDiogIR"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowfullscreen="true"
            loading="lazy"
          />
        </div>
      </MainLayout>
    </>
  );
};

export default ThingsToDoPage;
