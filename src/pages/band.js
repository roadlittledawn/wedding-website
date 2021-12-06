import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";

const ThingsToDoPage = () => {
  return (
    <>
      <SEO title="Brie & Clinton | The Band" />
      <MainLayout>
        <h1>The band</h1>
        <p>
          We're thrilled and honored to have the{" "}
          <a href="https://www.smokeybrights.com/">Smokey Brights</a> from
          Seattle play a set to help us partay!
        </p>
        <p>
          The band will not take requests, so please refrain from drunkenly
          asking them to play the chicken dance ;)
        </p>
        <p>Check out some of their most popular tunes</p>
        <iframe
          src="https://open.spotify.com/embed/artist/52El5lMDpmHgFxGuFHwD5T?utm_source=generator"
          width="500"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <p>This album was on play nonstop during the pandemic.</p>
        <iframe
          src="https://open.spotify.com/embed/album/3pQaSqBRvWUUvq7o3QEbfb?utm_source=generator"
          width="500px"
          height="380"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </MainLayout>
    </>
  );
};

export default ThingsToDoPage;
