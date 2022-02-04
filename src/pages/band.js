import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";
import { siteOptions } from "../utils/constants";
import PageTitle from "../components/PageTitle";

const ThingsToDoPage = () => {
  return (
    <>
      <SEO title="Brie & Clinton | The Band" />
      <MainLayout>
        <PageTitle title="The band" />
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
          <p>
            We're thrilled and honored to have the{" "}
            <a href="https://www.smokeybrights.com/">Smokey Brights</a> from
            Seattle play a set to help us partay!
          </p>
          <p>
            The band will not take requests, so please refrain from drunkenly
            asking them to play the chicken dance ;)
          </p>
          <h2>Most popular tunes</h2>
          <iframe
            src="https://open.spotify.com/embed/artist/52El5lMDpmHgFxGuFHwD5T?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
          <h2>Our favorite album</h2>
          <p>This album was on play nonstop during the pandemic.</p>
          <iframe
            src="https://open.spotify.com/embed/album/3pQaSqBRvWUUvq7o3QEbfb?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </MainLayout>
    </>
  );
};

export default ThingsToDoPage;
