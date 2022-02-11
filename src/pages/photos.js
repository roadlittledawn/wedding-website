import React from "react";
import { css } from "@emotion/react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import Polaroids from "../components/Polaroids";
import PageTitle from "../components/PageTitle";

import trailStarePhoto from "../images/trail-stare.jpg";
import trailWalkPhoto from "../images/trail-walk.jpg";
import meadowPhoto from "../images/engagement-b-w-meadow.jpg";

import FullSizeRender1 from "../images/photo-album/FullSizeRender1.jpeg";
import IMG_0443 from "../images/photo-album/IMG_0443.jpeg";
import IMG_1142 from "../images/photo-album/IMG_1142.jpeg";
import IMG_2763 from "../images/photo-album/IMG_2763.jpeg";
import IMG_2814 from "../images/photo-album/IMG_2814.jpeg";
import IMG_2815 from "../images/photo-album/IMG_2815.jpeg";
import IMG_2847 from "../images/photo-album/IMG_2847.jpeg";
import IMG_2918 from "../images/photo-album/IMG_2918.jpeg";
import IMG_3032 from "../images/photo-album/IMG_3032.jpeg";
import IMG_3191 from "../images/photo-album/IMG_3191.jpeg";
import IMG_3302 from "../images/photo-album/IMG_3302.jpeg";
import IMG_3539 from "../images/photo-album/IMG_3539.jpeg";
import IMG_4057 from "../images/photo-album/IMG_4057.jpeg";
import IMG_4375 from "../images/photo-album/IMG_4375.jpeg";
import IMG_4652 from "../images/photo-album/IMG_4652.jpeg";
import IMG_5045 from "../images/photo-album/IMG_5045.jpeg";
import IMG_5272 from "../images/photo-album/IMG_5272.jpeg";
import IMG_5330 from "../images/photo-album/IMG_5330.jpeg";
import IMG_5782 from "../images/photo-album/IMG_5782.jpeg";
import IMG_5842 from "../images/photo-album/IMG_5842.jpeg";
import IMG_5875 from "../images/photo-album/IMG_5875.jpeg";
import IMG_6026 from "../images/photo-album/IMG_6026.jpeg";
import IMG_6274 from "../images/photo-album/IMG_6274.jpeg";
import IMG_6277 from "../images/photo-album/IMG_6277.jpeg";
import IMG_6347 from "../images/photo-album/IMG_6347.jpeg";
import img_engagement_day from "../images/photo-album/img_engagement_day.jpeg";
import img_guinn_guinn from "../images/photo-album/img_guinn_guinn.jpeg";
import img_squeak from "../images/photo-album/img_squeak.jpeg";

const images = [
  {
    src: IMG_6277,
    annotation: "Post snowshoe brew<br/>Hood River 1-9-22",
  },
  {
    src: trailStarePhoto,
    annotation: "Washington Park<br/>9-13-2021",
  },
  {
    src: trailWalkPhoto,
    annotation: "Washington Park<br/>9-13-2021",
  },
  {
    src: meadowPhoto,
    annotation: "Washington Park<br/>9-13-2021",
  },
  {
    src: trailStarePhoto,
    annotation: "Washington Park<br/>9-13-2021",
  },
  { src: img_engagement_day, annotation: "We got engaged!<br/>April 4 2021" },
  { src: IMG_1142, annotation: "Coyote Wall<br/>5-9-21" },
  { src: IMG_2763, annotation: "Hawaiian Bday!<br/>Maui 3-4-19" },
  { src: IMG_2814, annotation: "Huge coco-nuts<br/>Maui Bday 3-4-19" },
  { src: IMG_2815, annotation: "Every gal's avo dream<br/>Maui Bday 3-4-19" },
  { src: IMG_2918, annotation: "Drinks and snorkeling<br/>Maui Bday 3-4-19" },
  {
    src: IMG_2847,
    annotation: "Squeaks saying hi<br/>Shoebox apt 2-13-20",
  },
  { src: IMG_3032, annotation: "Post date night<br/>Shoebox apt 4-20-19" },
  { src: IMG_3191, annotation: "Winos at their club<br/>Sokol Blosser 6-7-19" },
  { src: IMG_3302, annotation: "Melanie & Efrain<br/>wedding 6-22-19" },
  { src: IMG_3539, annotation: "Golden Gai!<br/>9-13-19" },
  { src: IMG_4057, annotation: "Ewww, Squeaks!<br/>11-24-19" },
  { src: IMG_4375, annotation: "We bought a house!<br/>Feb 2020" },
  { src: IMG_4652, annotation: "Silver Falls<br/>6-6-20" },
  { src: IMG_5045, annotation: "Crater Lake<br/>9-1-20" },
  { src: IMG_5272, annotation: "Xmas tree hunting<br/>11-28-20" },
  { src: IMG_5330, annotation: "Jersey gals at Xmas<br/>12-24-20" },
  {
    src: IMG_5782,
    annotation: "Just scooping litter<br/>5-12-21",
  },
  { src: IMG_5842, annotation: "Winos gotta wine<br/>@Corkskew 5-28-21" },
  {
    src: IMG_5875,
    annotation: "Dressin' up @Bare<br/>wedding 6-5-21",
  },
  { src: IMG_6026, annotation: "Glacier Nat. Park <br/>6-30-21" },
  { src: IMG_6274, annotation: "Winos gotta wine<br/>@ DePonte 8-22-21" },

  { src: IMG_6347, annotation: "Camp/Hike Rainier<br/>9-4-21" },
  { src: IMG_0443, annotation: "Abbey Road Farm<br/>6-7-20" },
  { src: FullSizeRender1, annotation: "New wino members<br/>@Sokol 2-1-20" },
  { src: img_guinn_guinn, annotation: "What's a pandemic?<br/>2020-2022" },
  { src: img_squeak, annotation: "How we all felt<br/>2020-2022" },
];

const PhotosPage = () => {
  return (
    <>
      <SEO title="Photos" />
      <MainLayout>
        <PageTitle title="Photos" />
        <div
          css={css`
            max-width: 1500px;
          `}
        >
          <Polaroids variant="album" images={images} />
        </div>
      </MainLayout>
    </>
  );
};

export default PhotosPage;
