import React from "react";
import { css } from "@emotion/react";
import { Carousel } from "react-carousel-minimal";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import PageTitle from "../components/PageTitle";
import { siteOptions } from "../utils/constants";

import abbeyRoadLogo from "../images/abbey-road-farm-logo.png";

import abbeyRoad from "../images/Abbey-Road-farm-2-1.jpg";

const sectionHeadingStyles = css`
  font-size: 2em;
  margin: 2em 0;
  text-align: center;
`;

const twoColumnFlex = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  & > *:not(h2) {
    margin: 2em;
  }
`;

const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};

const abbeyRoadImages = [{ image: abbeyRoad }, { image: abbeyRoad }];

const OurBigDayPage = () => {
  return (
    <>
      <SEO title="Photos" />
      <MainLayout>
        <PageTitle title="Our big day" />
        <div
          css={css`
            > * {
              margin: 3em 0;
              & > *:not(h2) {
                margin: 2em;
              }
            }
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              flex-direction: column;
            }
          `}
        >
          <section css={twoColumnFlex}>
            <div
              css={css`
                font-size: 1.5em;
                text-align: center;
              `}
            >
              <p
                css={css`
                  margin-bottom: 2em;
                `}
              >
                Saturday, June 4th, 2022 @ 4pm
              </p>
              <div>
                <img src={abbeyRoadLogo} />
              </div>
              <p>
                10280 NE Oak Springs Farm Rd
                <br />
                Carlton, Oregon
              </p>
            </div>
            <div
              css={css`
                flex-grow: 2;
                @media screen and (max-width: ${siteOptions.layout
                    .mobileBreakpoint}) {
                  width: 100%;
                }
              `}
            >
              <img
                css={css`
                  border-radius: 6px;
                `}
                width="100%"
                src={abbeyRoad}
              />
            </div>
          </section>
          <section>
            <h2 css={sectionHeadingStyles}>Getting there</h2>
            <div css={twoColumnFlex}>
              <div>
                <p>TBD bus info</p>
                <p>
                  Or{" "}
                  <a href="https://www.google.com/maps/dir//45.2906054,-123.1041744/@45.290584,-123.1742142,12z">
                    click here
                  </a>{" "}
                  for Google Directions
                </p>
              </div>
              <div
                css={css`
                  flex: 0 0 500px;
                  @media screen and (max-width: ${siteOptions.layout
                      .mobileBreakpoint}) {
                    flex: 2 auto;
                  }
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
          </section>

          <section>
            <h2 css={sectionHeadingStyles}>What's the haps?</h2>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <ul
                css={css`
                  list-style-type: none;
                `}
              >
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
          </section>

          <section>
            <h2 css={sectionHeadingStyles}>The venue</h2>
            <div
              css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                > * {
                  margin: 0 2em;
                }
              `}
            >
              <div
                css={css`
                  max-width: 500px;
                `}
              >
                <p>
                  Brie and I first discovered{" "}
                  <a href="https://abbeyroadfarm.com/index.html">
                    Abbey Road Farm
                  </a>{" "}
                  when our friends Chris and Ali stayed there for their
                  anniversary and invited us out to carouse with them on a much
                  needed sunny day in the height of the pandemic in June 2020.
                </p>
                <p>
                  We love it because it's chill, they play fun music, and they
                  have a good variety of wines for all palettes (reds, whites,
                  sparkles). They grow and make some of their own, but they also
                  operate as a co-op where they serve/sell fellow winemakers'
                  varietals.
                </p>
                <p>
                  We'll be serving a good selection of their wine. But also feel
                  free to have a tasting or stroll around the farm to say hi to
                  some of their animals. Fun fact: each of their roosters is
                  named after drag queens 🤣
                </p>
              </div>
              <div>
                <Carousel
                  data={abbeyRoadImages}
                  width="100%"
                  height="500px"
                  captionStyle={captionStyle}
                  radius="10px"
                  slideNumber={true}
                  slideNumberStyle={slideNumberStyle}
                  automatic={false}
                  dots={true}
                  slideBackgroundColor="darkgrey"
                  slideImageFit="cover"
                  thumbnails={false}
                  style={{
                    textAlign: "center",
                    maxWidth: "850px",
                    maxHeight: "500px",
                    margin: "40px auto",
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
};

export default OurBigDayPage;
