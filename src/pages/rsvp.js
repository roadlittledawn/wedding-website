import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import { request, gql } from "graphql-request";

const endpoint = "https://b-c-rsvp-service.herokuapp.com/graphql";

const query = gql`
  query GetInvite($input: InviteInput!) {
    invite(input: $input) {
      id
      inviteId
      isSubmitted
      partyName
      guestList {
        name
        isGoing
        mealChoice
        dietaryRestrictions
      }
    }
  }
`;

const RsvpPage = () => {
  const [state, setState] = useState({});
  const [inviteCode, setInviteCode] = useState(null);
  const [invite, setInviteData] = useState(0);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute("action")))
  //     .catch((error) => alert(error));
  // };

  const getInvite = async (id) => {
    const variables = {
      input: {
        inviteId: id,
      },
    };
    const data = await request(endpoint, query, variables);
    setInviteData(data.invite);
  };

  return (
    <>
      <SEO title="RSVP" />
      <MainLayout>
        <h1>RSVP</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getInvite(inviteCode);
          }}
        >
          <label>Enter invite code</label>
          <input
            type="text"
            name="invite-code"
            placeholder="Enter code from your RSVP"
            value={inviteCode || ""}
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <button type="submit">Get invite</button>
        </form>
        {invite && <pre>{JSON.stringify(invite, null, 2)}</pre>}
        {/* <form
          name="rsvp-test1"
          method="POST"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Enter invite code</label>
            <input
              type="text"
              name="invite-code"
              onChange={(e) => getInvite(e.target.value)}
            />
          </p>
          <p>
            <label>
              Your Name:{" "}
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Can you join us?
              <select name="response" onChange={handleChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form> */}
      </MainLayout>
    </>
  );
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default RsvpPage;
