import React from "react";
import { css } from "@emotion/react";
import { Carousel } from "react-carousel-minimal";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import PageTitle from "../components/PageTitle";
import { siteOptions } from "../utils/constants";

import abbeyRoadLogo from "../images/abbey-road-farm-logo.png";

import abbeyRoad from "../images/Abbey-Road-farm-2-1.jpg";
import IMG_0411 from "../images/venue/IMG_0411.jpeg";
import IMG_0443 from "../images/venue/IMG_0443.jpeg";
import abbeyRoadFarm009 from "../images/venue/abbey-road-farm-009_orig.jpg";
import abbeyRoadFarm002 from "../images/venue/abbey-road-farm-misc-002_orig.jpg";
import abbeyRoadFarm034 from "../images/venue/abbey-road-farm-misc-034_orig.jpg";
import abbeyRoadFarm037 from "../images/venue/abbey-road-farm-misc-037_orig.jpg";
import abbeyRoadFarm075 from "../images/venue/abbey-road-farm-misc-075_orig.jpg";
import abbeyRoadFarm038 from "../images/venue/photo-jun-19-8-07-44-am-1_orig.jpg";
import blueStarBus from "../images/blue-star-bus.png";

const sectionHeadingStyles = css`
  font-size: 2.5em;
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
  @media screen and (max-width: ${siteOptions.layout.mobileBreakpoint}) {
    flex-direction: column;
    & > *:not(h2) {
      margin: 1em 0;
      width: 100%;
    }
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

const abbeyRoadImages = [
  { image: abbeyRoad },
  { image: IMG_0411 },
  { image: IMG_0443 },
  { image: abbeyRoadFarm009 },
  { image: abbeyRoadFarm002 },
  { image: abbeyRoadFarm034 },
  { image: abbeyRoadFarm037 },
  { image: abbeyRoadFarm075 },
  { image: abbeyRoadFarm038 },
];

const OurBigDayPage = () => {
  return (
    <>
      <SEO title="Photos" />
      <MainLayout>
        <PageTitle title="Our big day" />
        <div
          css={css`
            section {
              margin: 3em 0;
            }
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              flex-direction: column;
              > * {
                margin: 1em 0;
              }
            }
          `}
        >
          <section css={twoColumnFlex}>
            <div
              css={css`
                font-size: 1.5em;
                font-family: var(--polaroid-annotation-font);
                text-align: center;
              `}
            >
              <p
                css={css`
                  margin-bottom: 2em;
                  font-size: 1.5em;
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
                max-width: 700px;
                @media screen and (max-width: ${siteOptions.layout
                    .mobileBreakpoint}) {
                  width: 100%;
                }
              `}
            >
              <img
                css={css`
                  border-radius: 12px;
                `}
                width="100%"
                src={abbeyRoad}
              />
            </div>
          </section>
          <section>
            <h2 css={sectionHeadingStyles}>Getting there</h2>
            <div css={twoColumnFlex}>
              <div
                css={css`
                  max-width: 500px;
                `}
              >
                <p>
                  For those of you staying in Portland, we've arranged for a
                  coach bus to drive you to / from Abbey Road. The bus will
                  depart <b>promptly at 230pm</b> from The{" "}
                  <a
                    href="https://g.page/markspencerhotel?share"
                    target="_blank"
                  >
                    Mark Spencer Hotel, 409 SW 11th Ave
                  </a>{" "}
                  in downtown Portland (see location on map).{" "}
                </p>
                <p>
                  The bus will depart Abbey Road after the wedding at 10:15pm.
                </p>
                <p>Look for a Blue Star bus like this:</p>
                <div>
                  <img
                    src={blueStarBus}
                    css={css`
                      max-width: 100%;
                      border-radius: 12px;
                    `}
                  />
                </div>
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
                  <b>4p</b>: Ceremony
                </li>
                <li>
                  <b>5p</b>: Cocktail hour
                </li>
                <li>
                  <b>6p</b>: Dinner
                </li>
                <li>
                  <b>7:30p</b>: Music by DJLX
                </li>
                <li>
                  <b>8:30p</b>: Music by Smokey Brights
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
                  We love it because it's comparitively chill, they play good
                  music, and they have a good variety of wines for all palettes
                  (reds, whites, sparkles). They grow and make some of their
                  own, but they also operate as a co-op where they serve/sell
                  fellow winemakers' varietals.
                </p>
                <p>
                  We'll be serving a good selection of their wine. But also feel
                  free to have a tasting or stroll around the farm to say hi to
                  some of their animals. Fun fact: each of their roosters is
                  named after drag queens 🤣
                </p>
              </div>
              <div
                css={css`
                  width: 700px;
                  @media screen and (max-width: ${siteOptions.layout
                      .mobileBreakpoint}) {
                    width: 100%;
                  }
                `}
              >
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
                  slideBackgroundColor="#1b1818d9"
                  slideImageFit="contain"
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
