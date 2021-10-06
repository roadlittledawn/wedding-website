import React from "react";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";

const RsvpPage = () => {
  return (
    <>
      <SEO title="RSVP" />
      <MainLayout>
        <h1>RSVP</h1>
        <form name="rsvp-test1" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Can you join us?
              <select name="response">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </MainLayout>
    </>
  );
};

export default RsvpPage;
