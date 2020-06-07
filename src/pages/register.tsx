import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { LoginPayload } from "../App";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

const ATTEMPT_REGISTER = gql`
  mutation authenticate(
    $email: String!
    $password: String!
    $confPassword: String!
    $minecraftName: String!
    $dob: String!
    $whereHeard: String!
    $moddedExperience: String!
    $knownMembers: String!
    $interestedServers: String!
    $aboutUser: String!
  ) {
    register(
      email: $email
      password: $password
      confPassword: $confPassword
      minecraftName: $minecraftName
      dob: $dob
      whereHeard: $whereHeard
      moddedExperience: $moddedExperience
      knownMembers: $knownMembers
      interestedServers: $interestedServers
      aboutUser: $aboutUser
    ) {
      token
      user {
        id
        displayName
      }
    }
  }
`;

interface IProps {
  setUser: (payload: LoginPayload) => void;
}

const Register = (props: RouteComponentProps & IProps) => {
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const confPasswordRef = React.createRef<HTMLInputElement>();
  const mcNameRef = React.createRef<HTMLInputElement>();
  const dobRef = React.createRef<HTMLInputElement>();

  const whereHeardRef = React.createRef<HTMLInputElement>();
  const moddedExperienceRef = React.createRef<HTMLInputElement>();
  const knownMembersRef = React.createRef<HTMLInputElement>();
  const interestedServersRef = React.createRef<HTMLInputElement>();
  const aboutUserRef = React.createRef<HTMLInputElement>();

  const [attemptRegister, { data, loading, error }] = useMutation(
    ATTEMPT_REGISTER
  );

  if (data) {
    setTimeout(() => {
      props.setUser(data.register);
      props.history.replace("/");
    });
    return null;
  }

  async function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !emailRef.current ||
      !passwordRef.current ||
      !confPasswordRef.current ||
      !mcNameRef.current ||
      !dobRef.current ||
      !whereHeardRef.current ||
      !moddedExperienceRef.current ||
      !knownMembersRef.current ||
      !interestedServersRef.current ||
      !aboutUserRef.current
    ) {
      return;
    }

    await attemptRegister({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        confPassword: confPasswordRef.current.value,
        minecraftName: mcNameRef.current.value,
        dob: dobRef.current.value,
        whereHeard: whereHeardRef.current.value,
        moddedExperience: moddedExperienceRef.current.value,
        knownMembers: knownMembersRef.current.value,
        interestedServers: interestedServersRef.current.value,
        aboutUser: aboutUserRef.current.value,
      },
    });
  }

  return (
    <div>
      {error && <div>{error.message.replace("GraphQL error: ", "")}</div>}
      <div className="auth-form auth-form-wide">
        <form method="POST" onSubmit={formSubmitted}>
          {/*e-mail*/}
          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              disabled={loading}
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              required={true}
              autoComplete="email"
            />
          </div>

          {/*password*/}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              disabled={loading}
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required={true}
              autoComplete="new-password"
            />
          </div>

          {/*confirm password*/}
          <div className="form-group">
            <label htmlFor="confPassword">Confirm Password</label>
            <input
              disabled={loading}
              type="password"
              id="confPassword"
              name="confPassword"
              ref={confPasswordRef}
              required={true}
              autoComplete="new-password"
            />
          </div>

          {/*minecraft name*/}
          <div className="form-group">
            <label htmlFor="mcName">Minecraft Name</label>
            <input
              disabled={loading}
              type="text"
              id="mcName"
              name="mcName"
              ref={mcNameRef}
              required={true}
            />
          </div>

          {/*date of birth*/}
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              disabled={loading}
              type="date"
              id="dob"
              name="dob"
              ref={dobRef}
              required={true}
            />
          </div>

          {/*Where did you hear about Madhouse Miners?*/}
          <div className="form-group">
            <label htmlFor="whereHeard">
              Where did you hear about Madhouse Miners?
            </label>
            <input
              disabled={loading}
              type="text"
              id="whereHeard"
              name="whereHeard"
              ref={whereHeardRef}
              required={true}
            />
          </div>

          {/*What experience do you have with modded Minecraft?*/}
          <div className="form-group">
            <label htmlFor="moddedExperience">
              What experience do you have with modded Minecraft?
            </label>
            <input
              disabled={loading}
              type="text"
              id="moddedExperience"
              name="moddedExperience"
              ref={moddedExperienceRef}
              required={true}
            />
          </div>

          {/*Do you know any other members of our community? If so, what is their minecraft name?*/}
          <div className="form-group">
            <label htmlFor="knownMembers">
              Do you know any other members of our community? If so, what is
              their minecraft name?
            </label>
            <input
              disabled={loading}
              type="text"
              id="knownMembers"
              name="knownMembers"
              ref={knownMembersRef}
              required={true}
            />
          </div>

          {/*Which of our servers are you mainly interested in and why?*/}
          <div className="form-group">
            <label htmlFor="interestedServers">
              Which of our servers are you mainly interested in and why?
            </label>
            <input
              disabled={loading}
              type="text"
              id="interestedServers"
              name="interestedServers"
              ref={interestedServersRef}
              required={true}
            />
          </div>

          {/*Tell us a bit about yourself (e.g. What mods are you mainly interest in, what style of building do you like to do?)*/}
          <div className="form-group">
            <label htmlFor="aboutUser">
              Tell us a bit about yourself (e.g. What mods are you mainly
              interest in, what style of building do you like to do?)
            </label>
            <input
              disabled={loading}
              type="text"
              id="aboutUser"
              name="aboutUser"
              ref={aboutUserRef}
              required={true}
            />
          </div>

          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
