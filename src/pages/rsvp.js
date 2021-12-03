import React, { useState, useEffect } from "react";
// import { navigate } from "@reach/router";
import { css } from "@emotion/react";
import { request, gql } from "graphql-request";
import slugify from "react-slugify";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import LoadingIcon from "../components/LoadingIcon";
import { useForm } from "react-form";
import Select from "../components/Select";

const endpoint = "https://b-c-rsvp-service.herokuapp.com/graphql";

const mealOptions = [
  { label: "Chicken", value: "Chicken" },
  { label: "Pasta", value: "Pasta" },
  { label: "Salmon", value: "Salmon" },
];

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
        likesOysters
        dietaryRestrictions
      }
    }
  }
`;

const recordResponseMutation = gql`
  mutation RecordResponse($input: RecordResponseInput!) {
    recordResponse(input: $input) {
      isSubmitted
    }
  }
`;

const RsvpPage = () => {
  // TODO: Netlify: form state
  // const [state, setState] = useState({});
  const [inviteCode, setInviteCode] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [inviteFound, setInviteFound] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(null);
  const [invite, setInviteData] = useState(null);

  const {
    Form,
    values,
    meta: { canSubmit },
  } = useForm({
    onSubmit: () => {
      recordResponseInDb();
      // TODO: Netlify: record submission in netfliy
      // const form = e.target;
      // fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({
      //     "form-name": form.getAttribute("name"),
      //     ...state,
      //   }),
      // })
      //   .then(() => navigate(form.getAttribute("action")))
      //   .catch((error) => alert(error));
    },
  });

  // TODO: Netlify: form state
  // const handleChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };

  const updateGuestData = (guestIdx, propName, e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setInviteData((state) => ({
      ...state,
      guestList: state.guestList.map((el, index) =>
        index === guestIdx ? { ...el, [propName]: value } : el
      ),
    }));
  };

  const getInvite = async (id) => {
    setIsLoading(true);
    const variables = {
      input: {
        inviteId: id.trim(),
      },
    };
    const data = await request(endpoint, query, variables);
    if (!data.invite) {
      setInviteFound(false);
    } else if (data.invite) {
      setInviteFound(true);
    }
    setInviteData(data.invite);
    setIsLoading(false);
  };

  const recordResponseInDb = async () => {
    const variables = {
      input: {
        inviteId: invite.inviteId,
        payload: {
          guestList: invite.guestList,
        },
      },
    };
    const data = await request(endpoint, recordResponseMutation, variables);
    setIsSubmitted(data.recordResponse.isSubmitted);
  };

  useEffect(() => {
    setIsSubmitted(invite?.isSubmitted);
  }, [invite]);

  return (
    <>
      <SEO title="RSVP" />
      <MainLayout>
        <h1>RSVP</h1>
        {isSubmitted ? (
          <>Your RSVP has been recorded. Thanks for letting us know! 👍</>
        ) : (
          <>
            {!invite && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  getInvite(inviteCode);
                }}
                css={css`
                  > * {
                    margin: 1em 0;
                  }
                `}
              >
                <div>
                  <label htmlFor="invite-code">
                    Enter the personalized code found in your invite
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="invite-code"
                    name="invite-code"
                    placeholder="Invite code"
                    onChange={(e) => setInviteCode(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  css={css`
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    font-weight: 600;
                    background-color: var(--color-red-400);
                    color: var(--color-white);
                    border-radius: 3px;
                    line-height: 1;
                    cursor: pointer;
                    border: 1px solid transparent;
                    transition: all 0.15s ease-out;
                    white-space: nowrap;
                    text-decoration: none;
                    :hover {
                      opacity: 0.75;
                    }
                  `}
                >
                  Get invite
                </button>
              </form>
            )}
            {isLoading && (
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  color: var(--color-red-400);
                `}
              >
                <LoadingIcon />
                <p>Hang tight. We're getting your RSVP info...</p>
              </div>
            )}
            {inviteFound === false && (
              <>
                <p>
                  🤔 We could not find an invite with that code. Make sure you
                  entered the correct code. If it's correct, feel free to rage
                  text Clinton ;)
                </p>
              </>
            )}
            {invite && (
              <>
                <h2>{invite.partyName}</h2>
                {/* <form
                  name="rsvp-test1"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={submitForm}
                  css={css`
                    font-size: 1.25em;
                  `}
                > */}
                <Form>
                  <input type="hidden" name="form-name" value="contact" />
                  <p>Who in your party is coming?</p>

                  {invite.guestList.map((guest, index) => (
                    <div>
                      <input
                        key={`${slugify(guest.name)}-isgoing`}
                        type="checkbox"
                        id={`${slugify(guest.name)}-isgoing`}
                        name={`${slugify(guest.name)}-isgoing`}
                        onChange={(e) => updateGuestData(index, "isGoing", e)}
                      />
                      <label htmlFor={slugify(guest.name)}>{guest.name}</label>
                      {invite?.guestList[index].isGoing && (
                        <div>
                          <div>
                            <p>What do you want to eat?</p>
                            <Select
                              field={`guestList.${index}.mealChoice`}
                              guestIdx={index}
                              options={mealOptions}
                              emptyOptionText={"- Choose meal -"}
                              onInputChange={(guestIdx, value) =>
                                setInviteData((prevState) => ({
                                  ...prevState,
                                  guestList: prevState.guestList.map(
                                    (el, index) =>
                                      index === guestIdx
                                        ? { ...el, mealChoice: value }
                                        : el
                                  ),
                                }))
                              }
                              validate={(value) =>
                                value === "" ||
                                !Boolean(
                                  mealOptions.find((opt) => opt.value === value)
                                )
                                  ? "Please choose one of the meal choices"
                                  : false
                              }
                            />
                          </div>

                          <label htmlFor="">Do you like oysters?</label>
                          <div>
                            <Select
                              field={`guestList.${index}.likesOysters`}
                              options={[
                                { label: "Yes", value: 1 },
                                { label: "No", value: 0 },
                              ]}
                              emptyOptionText={"- Select an option -"}
                              guestIdx={index}
                              onInputChange={(guestIdx, value) =>
                                setInviteData((prevState) => ({
                                  ...prevState,
                                  guestList: prevState.guestList.map(
                                    (el, index) =>
                                      index === guestIdx
                                        ? {
                                            ...el,
                                            likesOysters: Boolean(
                                              parseInt(value)
                                            ),
                                          }
                                        : el
                                  ),
                                }))
                              }
                              validate={(value) =>
                                !value
                                  ? "Let us know if you like oysters"
                                  : false
                              }
                            />
                          </div>
                          <div>
                            <p>
                              Any dietary restrictions we should know about?
                            </p>
                            <textarea
                              placeholder="Allergies, vegan, other stuff"
                              value={guest.dietaryRestrictions || ""}
                              onChange={(e) =>
                                updateGuestData(index, "dietaryRestrictions", e)
                              }
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  <p>
                    <button type="submit" disabled={!canSubmit}>
                      Submit
                    </button>
                  </p>
                </Form>
                {/* </form> */}
              </>
            )}
          </>
        )}
      </MainLayout>
    </>
  );
};

// TODO: Netfify: helper function
// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

export default RsvpPage;
