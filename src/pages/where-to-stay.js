import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";

const WhereToStayPage = () => {
  return (
    <>
      <SEO title="Where to stay" />
      <MainLayout>
        <h1>Where to stay</h1>
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
          <h2>Portland</h2>
          <p>Check out our map of places we recommend staying in Portland</p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=11VwVdRePHbJNL1EJs3GM4bHXESPdsx4y"
            width="100%"
            height="480"
          ></iframe>
          <h2>Willamette Valley / Wine Country</h2>
          <p>
            Most towns in wine country are relatively small. So lodging options
            can be a bit limited. We recommend looking on AirBnb, VRBO, Vacasa
            first.
          </p>
          <p>If you want to stay in / near one of the towns, we recommend:</p>
          <ul>
            <li>
              <b>McMinnville</b>. Biggest town in wine country with a cutsie
              main street area with some good restaurants and bars.
            </li>
            <li>
              <b>Newberg</b>. 2nd biggest town with some good restaurants /
              bars.
            </li>
            <li>
              <b>Carlton</b>. Very small, but has a small main street with some
              restaurants and wine tasting rooms. Closest town to our wedding
              venue.
            </li>
            <li>
              <b>Dundee</b>. Also small, but the main thoroughfare is chock full
              of good restaurants and wine tasting rooms.
            </li>
          </ul>
        </div>
      </MainLayout>
    </>
  );
};

export default WhereToStayPage;
