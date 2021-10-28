import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { css } from "@emotion/react";

const ThingsToDoPage = () => {
  return (
    <>
      <SEO title="Things to do" />
      <MainLayout>
        <h1>Things to do</h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1m01rbByDY0ojoYX2FFEePQxeiKDiogIR"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
        ></iframe>
      </MainLayout>
    </>
  );
};

export default ThingsToDoPage;
