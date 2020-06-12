import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "../styles/forms.scss";

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
    )
  }
`;

interface IResponseErrors {
  email?: string;
  password?: string;
  confPassword?: string;
  minecraftName?: string;
  dob?: string;
  whereHeard?: string;
  moddedExperience?: string;
  knownMembers?: string;
  interestedServers?: string;
  aboutUser?: string;
}

const Register = () => {
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

  let errors: IResponseErrors = {};
  if (error) {
    errors = JSON.parse(error.message.replace("GraphQL error: ", ""));
  }

  if (data && data.register) {
    return (
      <div>
        Thank you for your registration. Please check your e-mail to complete
        registering.
      </div>
    );
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
      <div className="auth-form auth-form-wide">
        <form method="POST" onSubmit={formSubmitted}>
          {/*e-mail*/}
          <div className={`form-group ${errors.email ? "error" : ""}`}>
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
            {errors.email && <div>{errors.email} </div>}
          </div>

          {/*password*/}
          <div className={`form-group ${errors.password ? "error" : ""}`}>
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
            {errors.password && <div>{errors.password} </div>}
          </div>

          {/*confirm password*/}
          <div className={`form-group ${errors.confPassword ? "error" : ""}`}>
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
            {errors.confPassword && <div>{errors.confPassword} </div>}
          </div>

          {/*minecraft name*/}
          <div className={`form-group ${errors.minecraftName ? "error" : ""}`}>
            <label htmlFor="mcName">Minecraft Name</label>
            <input
              disabled={loading}
              type="text"
              id="mcName"
              name="mcName"
              ref={mcNameRef}
              required={true}
            />
            {errors.minecraftName && <div>{errors.minecraftName} </div>}
          </div>

          {/*date of birth*/}
          <div className={`form-group ${errors.dob ? "error" : ""}`}>
            <label htmlFor="dob">Date of Birth</label>
            <input
              disabled={loading}
              type="date"
              id="dob"
              name="dob"
              ref={dobRef}
              required={true}
            />
            {errors.dob && <div>{errors.dob} </div>}
          </div>

          {/*Where did you hear about Madhouse Miners?*/}
          <div className={`form-group ${errors.whereHeard ? "error" : ""}`}>
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
              disabled={loading}
              type="text"
              id="moddedExperience"
              name="moddedExperience"
              ref={moddedExperienceRef}
              required={true}
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
              disabled={loading}
              type="text"
              id="knownMembers"
              name="knownMembers"
              ref={knownMembersRef}
              required={true}
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
              disabled={loading}
              type="text"
              id="interestedServers"
              name="interestedServers"
              ref={interestedServersRef}
              required={true}
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
              disabled={loading}
              type="text"
              id="aboutUser"
              name="aboutUser"
              ref={aboutUserRef}
              required={true}
            />
            {errors.aboutUser && <div>{errors.aboutUser} </div>}
          </div>

          <div className="agree-terms">
            By submitting this form you agree that we can store the above
            information in order to process your whitelist application. We will
            store this information while your account is active. If you wish for
            us to remove this information you can do so by contacting us on
            Discord.
          </div>

          <button type="submit" disabled={loading}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
