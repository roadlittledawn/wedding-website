import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import LoadingIcon from "../components/LoadingIcon";
import { request, gql } from "graphql-request";
import slugify from "react-slugify";

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
  const [isLoading, setIsLoading] = useState(null);
  const [invite, setInviteData] = useState(null);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const updateGuestData = (guestIdx, propName, e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setInviteData((state) => {
      const obj = state;
      obj.guestList[guestIdx][propName] = value;
      setInviteData(obj);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  const getInvite = async (id) => {
    setIsLoading(true);
    const variables = {
      input: {
        inviteId: id.trim(),
      },
    };
    const data = await request(endpoint, query, variables);
    setInviteData(data.invite);
    setIsLoading(false);
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
          <label htmlFor="invite-code">Enter invite code</label>
          <input
            type="text"
            id="invite-code"
            name="invite-code"
            placeholder="Enter code from your RSVP"
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <button type="submit">Get invite</button>
        </form>
        {isLoading && <LoadingIcon />}
        {invite && (
          <>
            <pre>{JSON.stringify(invite, null, 2)}</pre>
            <h3>{invite.partyName}</h3>
            <form
              name="rsvp-test1"
              method="POST"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p>Tell us who in your party is coming</p>

              {invite.guestList.map((guest, index) => (
                <div>
                  <input
                    type="checkbox"
                    id={slugify(guest.name)}
                    name={slugify(guest.name)}
                    onChange={(e) => updateGuestData(index, "isGoing", e)}
                  />
                  <label htmlFor={slugify(guest.name)}>{guest.name}</label>
                  {invite.guestList[index].isGoing && (
                    <div>
                      <div>
                        <p>What do you want to eat?</p>
                        <select
                          value={invite.guestList[index].mealChoice || ""}
                          onChange={(e) =>
                            updateGuestData(index, "mealChoice", e)
                          }
                        >
                          <option value="Chicken">Chicken</option>
                          <option value="Pasta">Pasta</option>
                          <option value="Salmon">Salmon</option>
                        </select>
                      </div>
                      <div>
                        <p>Any dietary restrictions we should know about?</p>
                        <textarea
                          onChange={(e) =>
                            updateGuestData(index, "dietaryRestrictions", e)
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* <p>
                <button type="submit">Send</button>
              </p> */}
            </form>
          </>
        )}
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
