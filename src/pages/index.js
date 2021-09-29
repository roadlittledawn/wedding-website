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
            <div
              css={css`
                width: 500px;
                min-height: 530px;
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
                    src="https://flourish.theknot.com/lockup/initials?firstName=Brie&amp;fianceFirstName=Clinton&amp;themeId=1226&amp;liteSite=true"
                    alt="Brie &amp; Clinton"
                    class="css-1uqsgts"
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
              padding: 1.5em 1.5em 6.5em 1.5em;
              box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.2);
              transform: scale(0.8, 0.8) rotate(5deg);
            `}
          >
            <img
              css={css`
                object-fit: cover;
                height: 600px;
                width: 600px;
              `}
              src={engagementPhoto}
            />
          </div>
        </div>
        <div
          css={css`
            width: 100%;
            background: url("https://media-api.xogrp.com/images/2bf4f099-92a5-4864-8780-fbfea7e8030f")
                bottom left no-repeat,
              url("https://media-api.xogrp.com/images/bab0d90d-7c9b-41c9-9f4f-fa4be0c10e96")
                bottom right no-repeat,
              url("https://media-api.xogrp.com/images/2c46cfda-8f9d-4bfc-a5a7-bd8cf803e058")
                bottom center no-repeat,
              url("https://media-api.xogrp.com/images/30304a82-c097-4d61-8d43-25d9d4fbfd23")
                bottom left no-repeat,
              url("https://media-api.xogrp.com/images/4730a441-18b2-4e8c-b2c9-8f7a48986fe7")
                bottom right no-repeat;
            background-size: 30%, 30%, 100%, 50%, 70%;
            min-height: 400px;
            min-width: 420px;
            display: flex;
            flex: 1;
            align-items: center;
          `}
        ></div>
      </MainLayout>
    </>
  );
};

export default HomePage;
