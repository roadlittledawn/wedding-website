import React from "react";
import { css } from "@emotion/react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import Polaroids from "../components/Polaroids";

import trailStarePhoto from "../images/trail-stare.jpg";
import trailWalkPhoto from "../images/trail-walk.jpg";
import meadowPhoto from "../images/engagement-b-w-meadow.jpg";

const PhotosPage = () => {
  return (
    <>
      <SEO title="Photos" />
      <MainLayout>
        <h1>Photos</h1>
        <div>
          <div>
            <Polaroids
              variant="album"
              images={[
                trailStarePhoto,
                meadowPhoto,
                trailWalkPhoto,
                trailStarePhoto,
                meadowPhoto,
                trailWalkPhoto,
              ]}
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default PhotosPage;
