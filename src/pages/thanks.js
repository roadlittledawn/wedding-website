import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";

const RsvpPage = () => {
  return (
    <>
      <SEO title="RSVP" />
      <MainLayout>
        <h1>Thanks for RSVPing</h1>
        <p>Thanks for responding!</p>
      </MainLayout>
    </>
  );
};

export default RsvpPage;
