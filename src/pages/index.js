import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import engagementPhoto from "../images/engagement-b-w-meadow.jpg";
import adventureBeginsSrc from "../images/OurAdventureBegins.png";
import { siteOptions } from "../utils/constants";

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
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <div
              css={css`
                position: relative;
                overflow: hidden;
                margin-right: -6em;
                background: #fff;
                padding: 1.5em 1.5em 6em 1.5em;
                box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
                transform: scale(0.8, 0.8) rotate(-10deg) translateY(75px);
                z-index: 10;
              `}
            >
              <img
                css={css`
                  object-fit: cover;
                  height: 26em;
                  width: 26em;
                `}
                src={engagementPhoto}
              />
            </div>
            <div
              css={css`
                position: relative;
                overflow: hidden;
                background: #fff;
                padding: 1.5em 1.5em 6em 1.5em;
                box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
                transform: scale(0.8, 0.8);
                z-index: 0;
              `}
            >
              <img
                css={css`
                  object-fit: cover;
                  height: 26em;
                  width: 26em;
                `}
                src={engagementPhoto}
              />
            </div>
            <div
              css={css`
                position: relative;
                overflow: hidden;
                margin-left: -6em;
                background: #fff;
                padding: 1.5em 1.5em 6em 1.5em;
                box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
                transform: scale(0.8, 0.8) rotate(10deg) translateY(75px);
                z-index: 10;
              `}
            >
              <img
                css={css`
                  object-fit: cover;
                  height: 26em;
                  width: 26em;
                `}
                src={engagementPhoto}
              />
            </div>
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
