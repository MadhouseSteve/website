import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";
import moment from "moment";
import "../styles/table.scss";
import { RouteComponentProps } from "react-router";
import { WhitelistStatus } from "../models/User";

const FETCH_WHITELIST = gql`
  query whitelist($id: ID) {
    whitelist(id: $id) {
      id
      displayName
      status
      submitted
      dob
      aboutUser
      interestedServers
      knownMembers
      moddedExperience
      whereHeard
    }
  }
`;

const UPDATE_WHITELIST = gql`
  mutation reviewWhitelist($id: ID, $outcome: String!, $feedback: String!) {
    reviewWhitelist(id: $id, outcome: $outcome, feedback: $feedback) {
      id
      displayName
      status
      submitted
      dob
      aboutUser
      interestedServers
      knownMembers
      moddedExperience
      whereHeard
    }
  }
`;

const reviewApplication = (props: RouteComponentProps<{ id: string }>) => {
  const { data, loading, error } = useQuery(FETCH_WHITELIST, {
    variables: { id: props.match.params.id },
  });
  const [reviewWhitelist] = useMutation(UPDATE_WHITELIST);
  const [formError, setFormError] = useState(false);

  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error loading applications</div>;
  }

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const feedbackRef = React.createRef<HTMLInputElement>();
  async function submitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();

    if (!feedbackRef.current) {
      return;
    }

    if (!feedbackRef.current.value.length) {
      setFormError(true);
      return;
    }
    setFormError(false);

    await reviewWhitelist({
      variables: {
        id: props.match.params.id,
        outcome: e.currentTarget.className,
        feedback: feedbackRef.current.value,
      },
    });
  }

  return (
    <React.Fragment>
      <table className="review-table">
        <tbody>
          <tr>
            <th>Application Status</th>
            <td className="capitalCase">
              {data.whitelist.status.toLowerCase().replace(/_/g, " ")}
            </td>
          </tr>
          <tr>
            <th>Minecraft Name</th>
            <td>{data.whitelist.displayName}</td>
          </tr>
          <tr>
            <th>Date of Birth</th>
            <td>{moment(data.whitelist.dob).format("DD MMMM yyyy")}</td>
          </tr>
          <tr>
            <th>Where did you hear about Madhouse Miners?</th>
            <td>{data.whitelist.whereHeard}</td>
          </tr>
          <tr>
            <th>What experience do you have with modded Minecraft?</th>
            <td>{data.whitelist.moddedExperience}</td>
          </tr>
          <tr>
            <th>
              Do you know any other members of our community? If so, what is
              their minecraft name?
            </th>
            <td>{data.whitelist.knownMembers}</td>
          </tr>
          <tr>
            <th>Which of our servers are you mainly interested in and why?</th>
            <td>{data.whitelist.interestedServers}</td>
          </tr>
          <tr>
            <th>
              Tell us a bit about yourself (e.g. What mods are you mainly
              interest in, what style of building do you like to do?)
            </th>
            <td>{data.whitelist.aboutUser}</td>
          </tr>
        </tbody>
      </table>

      {data.whitelist.status === "SUBMITTED" && (
        <form method="post" onSubmit={handleForm}>
          <div className={`form-group ${formError ? "form-error" : ""}`}>
            <input
              type="text"
              placeholder="Enter Some Feedback"
              name="feedback"
              id="feedback"
              ref={feedbackRef}
              required={true}
            />

            {formError && <div>You need to enter some feedback</div>}
          </div>

          <div className="center button-row">
            <button className={WhitelistStatus.ACCEPTED} onClick={submitForm}>
              Accept
            </button>
            <button
              className={WhitelistStatus.REQUEST_FOR_INFO}
              onClick={submitForm}
            >
              Request More Info
            </button>
            <button className={WhitelistStatus.DENIED} onClick={submitForm}>
              Reject
            </button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default withRouter(reviewApplication);
