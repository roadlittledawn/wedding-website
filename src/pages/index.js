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
            justify-content: space-around;
            align-items: center;
            > * {
              margin: 2em 0;
            }
            @media screen and (max-width: ${siteOptions.layout
                .mobileBreakpoint}) {
              flex-direction: column;
            }
          `}
        >
          <div
            css={css`
              font-family: "Julius Sans One", sans-serif;
              font-size: 2em;
            `}
          >
            <div>June 4, 2022</div>
            <div>
              Abbey Road Farm <br />
              Carlton, OR
            </div>
          </div>
          <div
            css={css`
              width: 400px;
              position: relative;
              overflow: hidden;
              /* :after {
                content: "";
                position: absolute;
                transform: translate(-50%, -52%);
                top: 50%;
                left: 50%;
                width: 100%;
                padding-bottom: 155%;
                box-shadow: inset 0px 0px 150px 60px rgba(0, 0, 0, 0.8);
                border-radius: 10px;
              } */
            `}
          >
            <img
              css={css`
                width: 100%;
                max-width: 400px;
                max-height: 600px;
                border-radius: 10px;
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
