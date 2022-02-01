import React from "react";
import { css } from "@emotion/react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { siteOptions } from "../utils/constants";

const OurBigDayPage = () => {
  return (
    <>
      <SEO title="Photos" />
      <MainLayout>
        <h1>Our big day</h1>
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            width: 100%;
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              flex-grow: 1;
              font-size: 2em;
            `}
          >
            Saturday, June 5, 2022 @ 4pm
            <br />
            Abbey Road Farm
            <br />
            10280 NE Oak Springs Farm Rd
            <br />
            Carlton, Oregon
          </div>
          <div
            css={css`
              flex-grow: 2;
            `}
          >
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1HjihE1DSS7H7xXLSeeOlUkFlKMEFGdtq&ehbc=2E312F"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowfullscreen="true"
              loading="lazy"
            />
          </div>
        </div>

        <h2>Transportation</h2>
        <div>
          <p>TBD bus info</p>
        </div>
        <h2>The venue</h2>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          `}
        >
          <div>Abbey road description here</div>
          <div>Abbey road photo here.</div>
        </div>

        <h2>What's the haps?</h2>
        <div>
          <ul>
            <li>
              <b>4pm</b>: Ceremony
            </li>
            <li>
              <b>5p - 6p</b>: Cocktail hour
            </li>
            <li>
              <b>6p</b>: Dinner
            </li>
            <li>
              <b>7:30p</b>: Smokey Brights take the stage
            </li>
            <li>
              <b>10p</b>: Closing time
            </li>
          </ul>
        </div>
      </MainLayout>
    </>
  );
};

export default OurBigDayPage;