import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./forms.scss";
import moment from "moment";
import { WhitelistStatus } from "../models/User";
import WhitelistBanner from "../components/WhitelistBanner";

const UPDATE_WHITELIST = gql`
  mutation updateWhitelist(
    $whereHeard: String!
    $moddedExperience: String!
    $knownMembers: String!
    $interestedServers: String!
    $aboutUser: String!
    $id: ID
  ) {
    updateWhitelist(
      whereHeard: $whereHeard
      moddedExperience: $moddedExperience
      knownMembers: $knownMembers
      interestedServers: $interestedServers
      aboutUser: $aboutUser
      id: $id
    ) {
      id
      displayName
      dob
      aboutUser
      interestedServers
      knownMembers
      moddedExperience
      status
      whereHeard
    }
  }
`;

const FETCH_WHITELIST = gql`
  query {
    whitelist {
      id
      displayName
      dob
      aboutUser
      interestedServers
      knownMembers
      moddedExperience
      status
      whereHeard
    }
  }
`;

interface IResponseErrors {
  whereHeard?: string;
  moddedExperience?: string;
  knownMembers?: string;
  interestedServers?: string;
  aboutUser?: string;
}

const Whitelist = () => {
  const whereHeardRef = React.createRef<HTMLInputElement>();
  const moddedExperienceRef = React.createRef<HTMLInputElement>();
  const knownMembersRef = React.createRef<HTMLInputElement>();
  const interestedServersRef = React.createRef<HTMLInputElement>();
  const aboutUserRef = React.createRef<HTMLInputElement>();

  const { data, loading } = useQuery(FETCH_WHITELIST);
  const [updateWhitelist, mutation] = useMutation(UPDATE_WHITELIST);

  if (loading) {
    return null;
  }

  let errors: IResponseErrors = {};
  if (mutation.error) {
    errors = JSON.parse(mutation.error.message.replace("GraphQL error: ", ""));
  }

  async function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !whereHeardRef.current ||
      !moddedExperienceRef.current ||
      !knownMembersRef.current ||
      !interestedServersRef.current ||
      !aboutUserRef.current
    ) {
      return;
    }

    await updateWhitelist({
      variables: {
        whereHeard: whereHeardRef.current.value,
        moddedExperience: moddedExperienceRef.current.value,
        knownMembers: knownMembersRef.current.value,
        interestedServers: interestedServersRef.current.value,
        aboutUser: aboutUserRef.current.value,
        id: data.whitelist.id,
      },
    });
  }

  return (
    <div>
      <WhitelistBanner
        status={data.whitelist.status}
        feedback={data.whitelist.feedback}
      />

      <div className="auth-form auth-form-wide">
        <form method="POST" onSubmit={formSubmitted}>
          {/*minecraft name*/}
          <div className="form-group">
            <label htmlFor="mcName">Minecraft Name</label>
            <input
              disabled={true}
              type="text"
              id="mcName"
              name="mcName"
              value={data.whitelist.displayName}
            />
          </div>

          {/*date of birth*/}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              disabled={true}
              type="text"
              id="dob"
              name="dob"
              value={moment(data.whitelist.dob).format("DD MMMM yyyy")}
            />
          </div>

          {/*Where did you hear about Madhouse Miners?*/}
          <div className={`form-group ${errors.whereHeard ? "error" : ""}`}>
            <label htmlFor="whereHeard">
              Where did you hear about Madhouse Miners?
            </label>
            <input
              disabled={
                mutation.loading ||
                data.whitelist.status === WhitelistStatus.ACCEPTED ||
                data.whitelist.status === WhitelistStatus.DENIED
              }
              type="text"
              id="whereHeard"
              name="whereHeard"
              ref={whereHeardRef}
              required={true}
              defaultValue={data.whitelist.whereHeard}
            />
            {errors.whereHeard && <div>{errors.whereHeard} </div>}
          </div>

          {/*What experience do you have with modded Minecraft?*/}
          <div
            className={`form-group ${errors.moddedExperience ? "error" : ""}`}
          >
            <label htmlFor="moddedExperience">
              What experience do you have with modded Minecraft?
            </label>
            <input
              disabled={
                mutation.loading ||
                data.whitelist.status === WhitelistStatus.ACCEPTED ||
                data.whitelist.status === WhitelistStatus.DENIED
              }
              type="text"
              id="moddedExperience"
              name="moddedExperience"
              ref={moddedExperienceRef}
              required={true}
              defaultValue={data.whitelist.moddedExperience}
            />
            {errors.moddedExperience && <div>{errors.moddedExperience} </div>}
          </div>

          {/*Do you know any other members of our community? If so, what is their minecraft name?*/}
          <div className={`form-group ${errors.knownMembers ? "error" : ""}`}>
            <label htmlFor="knownMembers">
              Do you know any other members of our community? If so, what is
              their minecraft name?
            </label>
            <input
              disabled={
                mutation.loading ||
                data.whitelist.status === WhitelistStatus.ACCEPTED ||
                data.whitelist.status === WhitelistStatus.DENIED
              }
              type="text"
              id="knownMembers"
              name="knownMembers"
              ref={knownMembersRef}
              required={true}
              defaultValue={data.whitelist.knownMembers}
            />
            {errors.knownMembers && <div>{errors.knownMembers} </div>}
          </div>

          {/*Which of our servers are you mainly interested in and why?*/}
          <div
            className={`form-group ${errors.interestedServers ? "error" : ""}`}
          >
            <label htmlFor="interestedServers">
              Which of our servers are you mainly interested in and why?
            </label>
            <input
              disabled={
                mutation.loading ||
                data.whitelist.status === WhitelistStatus.ACCEPTED ||
                data.whitelist.status === WhitelistStatus.DENIED
              }
              type="text"
              id="interestedServers"
              name="interestedServers"
              ref={interestedServersRef}
              required={true}
              defaultValue={data.whitelist.interestedServers}
            />
            {errors.interestedServers && <div>{errors.interestedServers} </div>}
          </div>

          {/*Tell us a bit about yourself (e.g. What mods are you mainly interest in, what style of building do you like to do?)*/}
          <div className={`form-group ${errors.aboutUser ? "error" : ""}`}>
            <label htmlFor="aboutUser">
              Tell us a bit about yourself (e.g. What mods are you mainly
              interest in, what style of building do you like to do?)
            </label>
            <input
              disabled={
                mutation.loading ||
                data.whitelist.status === WhitelistStatus.ACCEPTED ||
                data.whitelist.status === WhitelistStatus.DENIED
              }
              type="text"
              id="aboutUser"
              name="aboutUser"
              ref={aboutUserRef}
              required={true}
              defaultValue={data.whitelist.aboutUser}
            />
            {errors.aboutUser && <div>{errors.aboutUser} </div>}
          </div>

          <button type="submit" disabled={loading}>
            Update Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Whitelist;
