import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { request, gql } from "graphql-request";
import slugify from "react-slugify";
import MainLayout from "../layouts/MainLayout";
import SEO from "../components/SEO";
import LoadingIcon from "../components/LoadingIcon";
import { useForm } from "react-form";
import Select from "../components/Select";
import check from "../images/check.svg";
import PageTitle from "../components/PageTitle";

const endpoint = "https://b-c-rsvp-service.herokuapp.com/graphql";

const dietaryPrefOptions = [
  { label: "Vegan", value: "Vegan" },
  { label: "Vegetarian", value: "Vegetarian" },
];

const query = gql`
  query GetInvite($input: InviteInput!) {
    invite(input: $input) {
      id
      inviteId
      isSubmitted
      partyName
      personalMessage
      guestList {
        name
        isGoing
        dietaryPreference
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
    },
  });

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
        <PageTitle title="RSVP" />

        {isSubmitted ? (
          <>
            <div
              css={css`
                text-align: center;
              `}
            >
              Your RSVP has been recorded. Thanks for letting us know! 👍
            </div>
          </>
        ) : (
          <>
            {!invite && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  getInvite(inviteCode);
                }}
                css={css`
                  text-align: center;
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
              <div
                css={css`
                  max-width: 600px;
                `}
              >
                <p>
                  The meal is <b>family style</b>, which means you'll have your
                  pick from various dishes at your table. We just have a few
                  questions for y'all so we can plan accordingly.
                </p>
                <h2
                  css={css`
                    text-align: center;
                  `}
                >
                  {invite.partyName}
                </h2>

                {invite.personalMessage && (
                  <div
                    css={css`
                        position: relative;
                        background-color: rgba(#000, 0.5);
                        width: 100%;
                        max-width: 600px;
                        padding: 5px;
                        border: 2px solid #b78846;
                        margin: 3em 0;
                        &:before,
                        &:after {
                          content: "•";
                          position: absolute;
                          width: 14px;
                          height: 14px;
                          font-size: 14px;
                          color: #b78846;
                          border: 2px solid #b78846;
                          line-height: 12px;
                          top: 5px;
                          text-align: center;
                        }
                        &:before {
                          left: 5px;
                        }
                        &:after {
                          right: 5px;
                        }
  
                      }
                    `}
                  >
                    <div
                      css={css`
                        position: relative;
                        border: 2px solid #b78846;
                        padding: 40px;
                        &:before,
                        &:after {
                          content: "•";
                          position: absolute;
                          width: 14px;
                          height: 14px;
                          font-size: 14px;
                          color: #b78846;
                          border: 2px solid #b78846;
                          line-height: 12px;
                          bottom: -2px;
                          text-align: center;
                        }
                        &:before {
                          left: -2px;
                        }
                        &:after {
                          right: -2px;
                        }
                      `}
                    >
                      <div
                        css={css`
                          font-family: var(--guest-card-fancy-font);
                          transform: scaleY(1.5);
                          text-align: center;
                          letter-spacing: 3px;
                        `}
                      >
                        A NOTE FROM YOUR HOSTS
                      </div>
                      <div
                        css={css`
                          padding: 1em;
                        `}
                        dangerouslySetInnerHTML={{
                          __html: invite.personalMessage,
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                <Form
                  css={css`
                    width: 100%;
                    text-align: center;
                  `}
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <p>Who in your party is coming?</p>

                  {invite.guestList.map((guest, index) => (
                    <div
                      css={css`
                        margin: 1em 0;
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                          width: 100%;
                          margin: 1em auto 0 auto;
                          max-width: var(--forms-input-checkbox-width);
                          align-items: center;
                          justify-content: flex-start;
                          padding: 1em 0;
                          border: 1px solid var(--color-red-400);
                          border-radius: 6px;
                          ${invite.guestList[index].isGoing &&
                          `background-color: var(--color-red-200);
                          border-bottom-right-radius: 0;
                          border-bottom-left-radius: 0;`}
                          :hover {
                            cursor: pointer;
                          }
                          ${!invite.guestList[index].isGoing &&
                          selectHoverStyles}
                          > * {
                            margin: 0 1em;
                            pointer-events: none;
                          }
                        `}
                        onClick={() => {
                          setInviteData((state) => ({
                            ...state,
                            guestList: state.guestList.map((el, idx) => {
                              const value = !invite.guestList[index].isGoing;
                              return idx === index
                                ? { ...el, isGoing: value }
                                : el;
                            }),
                          }));
                        }}
                      >
                        <input
                          css={css`
                            appearance: none;
                            border: solid 1px var(--color-red-400);
                            height: 2em;
                            width: 2em;
                            border-radius: 3px;
                            :hover {
                              cursor: pointer;
                            }
                            :checked {
                              background-color: var(--color-red-400);
                              border: solid 1px var(--color-red-200);
                              background-image: url(${check});
                              background-position: 50%;
                              background-repeat: no-repeat;
                            }
                            :disabled {
                              border: solid 1px gray;
                              cursor: auto;
                            }
                          `}
                          key={`${slugify(guest.name)}-isgoing`}
                          type="checkbox"
                          id={`${slugify(guest.name)}-isgoing`}
                          name={`${slugify(guest.name)}-isgoing`}
                          checked={invite.guestList[index].isGoing}
                          // onChange={(e) => updateGuestData(index, "isGoing", e)}
                        />
                        <label htmlFor={`${slugify(guest.name)}-isgoing`}>
                          {guest.name}
                        </label>
                      </div>
                      {invite?.guestList[index].isGoing && (
                        <div
                          css={css`
                            border: 1px dotted var(--color-red-400);
                            max-width: 500px;
                            margin: 0 auto;
                            padding: 1em;
                            > * {
                              margin: 1em 0;
                            }
                          `}
                        >
                          <div>
                            <p>
                              Would {guest.name} like vegetarian or vegan
                              options at the table?
                            </p>
                            <Select
                              field={`guestList.${index}.dietaryPreference`}
                              guestIdx={index}
                              options={dietaryPrefOptions}
                              value={invite?.guestList[index].dietaryPreference}
                              emptyOptionText={"- No preference -"}
                              disableEmptyOption={false}
                              onInputChange={(guestIdx, value) =>
                                setInviteData((prevState) => ({
                                  ...prevState,
                                  guestList: prevState.guestList.map(
                                    (el, index) =>
                                      index === guestIdx
                                        ? { ...el, dietaryPreference: value }
                                        : el
                                  ),
                                }))
                              }
                            />
                          </div>

                          <label htmlFor={`guestList.${index}.likesOysters`}>
                            <span
                              css={css`
                                color: red;
                                margin-right: 0.5em;
                              `}
                            >
                              *
                            </span>
                            Do you like oysters?{" "}
                            <span
                              css={css`
                                color: red;
                                margin-left: 0.5em;
                                font-style: italic;
                              `}
                            >
                              Required
                            </span>
                          </label>

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
                                  ? "Let us know if this guest likes oysters"
                                  : false
                              }
                            />
                          </div>
                          <div>
                            <p>
                              Any dietary restrictions we should know about?
                            </p>
                            <textarea
                              placeholder="Food allergies, sensitivites, etc"
                              value={guest.dietaryRestrictions || ""}
                              onChange={(e) =>
                                updateGuestData(index, "dietaryRestrictions", e)
                              }
                              css={css`
                                width: 350px;
                              `}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  <div
                    css={css`
                      margin: 3em 0;
                    `}
                  >
                    <button
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
                      type="submit"
                      disabled={!canSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            )}
          </>
        )}
      </MainLayout>
    </>
  );
};

const selectHoverStyles = css`
  :hover {
    background-color: var(--color-red-200);
    opacity: 0.75;
  }
`;

export default RsvpPage;
