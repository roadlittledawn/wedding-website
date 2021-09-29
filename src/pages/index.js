import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import engagementPhoto from "../images/engagement-b-w-meadow.jpg";
import { siteOptions } from "../utils/constants";

const HomePage = () => {
  return (
    <>
      <SEO title="Brie and Clinton Wedding" />
      <MainLayout>
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            > * {
              margin: 2em;
            }
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              font-size: 10px;
              flex-direction: column;
              > * {
                margin: 0;
              }
            }
          `}
        >
          <div
            css={css`
              font-family: "Julius Sans One", sans-serif;
              font-size: 2em;
            `}
          >
            <div
              css={css`
                max-width: 500px;
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
                <h1>
                  <img
                    css={css`
                      width: 100%;
                    `}
                    src="https://flourish.theknot.com/lockup/initials?firstName=Brie&amp;fianceFirstName=Clinton&amp;themeId=1226&amp;liteSite=true"
                    alt="Brie &amp; Clinton"
                  />
                </h1>

                <div>June 4, 2022</div>
                <div>Carlton, OR</div>
              </div>
            </div>
          </div>
          <div
            css={css`
              position: relative;
              overflow: hidden;
              background: #fff;
              padding: 1.5em 1.5em 6em 1.5em;
              box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
              transform: scale(0.8, 0.8) rotate(5deg);
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
      </MainLayout>
    </>
  );
};

export default HomePage;
