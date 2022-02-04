import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import meadowPhoto from "../images/engagement-b-w-meadow.jpg";
import trailStarePhoto from "../images/trail-stare.jpg";
import trailWalkPhoto from "../images/trail-walk.jpg";
import adventureBeginsSrc from "../images/OurAdventureBegins.png";
import { siteOptions } from "../utils/constants";
import Polaroids from "../components/Polaroids";

const HomePage = () => {
  return (
    <>
      <SEO title="Brie and Clinton Wedding" />
      <MainLayout>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > * {
              margin: 2em;
            }
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              font-size: 10px;
            }
          `}
        >
          <div>
            <Polaroids
              variant="fan"
              images={[
                {
                  src: trailStarePhoto,
                },
                ,
                {
                  src: meadowPhoto,
                },
                ,
                {
                  src: trailWalkPhoto,
                },
                ,
              ]}
              featuredImg={meadowPhoto}
            />
          </div>

          <div
            css={css`
              font-size: 2em;
            `}
          >
            <div
              css={css`
                max-width: 700px;
                display: flex;
                align-items: center;
                flex-direction: row;
                padding: 3rem 1rem;
                margin: 0 auto;
                background: transparent;
                height: calc(100% - 10rem);
              `}
            >
              <div
                css={css`
                  text-align: center;
                `}
              >
                <img
                  src={adventureBeginsSrc}
                  css={css`
                    width: 100%;
                  `}
                />
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
