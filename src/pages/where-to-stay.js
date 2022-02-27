import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";
import PageTitle from "../components/PageTitle";

const WhereToStayPage = () => {
  return (
    <>
      <SEO title="Where to stay" />
      <MainLayout>
        <PageTitle title="Where to stay" />
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
          <p>
            Portland is a very much a city of neighborhoods, all enveloping the
            city center, generally divided into five--yes, five--quadrants
            (Northeast, Southeast, Southwest, Northwest, and North).
          </p>
          <p>
            Many neighborhoods are self-contained little pockets with a distinct
            personality. You can get mostly anywhere within 30min drive / bike
            ride. The city center has the most hotel options for sure, and has
            lots to do and see, especially for out-of-towners. Just note that
            parts of the city center can still be a little rough around the
            edges as it's still coming out of the pandemic.
          </p>
          <p>
            If you want to find something more quirky or chill, checkout some of
            the neighborhoods highlighted on the map. You'll likely want to
            check <a href="https://www.airbnb.com/">AirBnb</a>,{" "}
            <a href="https://www.vrbo.com/">VRBO</a>,{" "}
            <a href="https://www.vacasa.com/">Vacasa</a> for lodgings there.
          </p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=11VwVdRePHbJNL1EJs3GM4bHXESPdsx4y"
            width="100%"
            height="480"
          ></iframe>
          <h2
            css={css`
              margin-top: 2em;
            `}
          >
            Willamette Valley / Wine Country
          </h2>
          <p>
            Most towns in wine country are relatively small. So lodging options
            can be a bit limited. We recommend looking on{" "}
            <a href="https://www.airbnb.com/">AirBnb</a>,{" "}
            <a href="https://www.vrbo.com/">VRBO</a>,{" "}
            <a href="https://www.vacasa.com/">Vacasa</a> first. The Willamette
            Valley visitor's guide also has some good info on{" "}
            <a href="https://www.willamettewines.com/plan-your-visit/where-to-stay/">
              places to stay
            </a>
            .
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
