import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import "../styles/forms.scss";
import { RouteComponentProps } from "react-router";
import { LoginPayload } from "../App";

interface IProps {
  setUser: (payload: LoginPayload) => void;
}

const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $token: String!
    $password: String!
    $confirmPassword: String!
  ) {
    updatePassword(
      token: $token
      password: $password
      confirmPassword: $confirmPassword
    ) {
      token
      user {
        id
        displayName
        reviewer
      }
    }
  }
`;

const VALIDATE_TOKEN = gql`
  query validateResetToken($token: String!) {
    validateResetToken(token: $token)
  }
`;

const reset_pw = (props: RouteComponentProps<{ token: string }> & IProps) => {
  const passwordRef = React.createRef<HTMLInputElement>();
  const confPasswordRef = React.createRef<HTMLInputElement>();

  const [attemptReset, mutationResponse] = useMutation(UPDATE_PASSWORD);
  let mutationErrors = { password: null, confirmPassword: null };
  if (mutationResponse.error) {
    mutationErrors = JSON.parse(
      mutationResponse.error.message.replace("GraphQL error: ", "")
    );
  }

  const { data, loading, error } = useQuery(VALIDATE_TOKEN, {
    variables: { token: props.match.params.token },
  });
  if (loading) {
    return <div>Validating your token. Please wait.</div>;
  }
  if (error) {
    return (
      <div className="form-error">
        {error.message.replace("GraphQL error: ", "")}
      </div>
    );
  }

  async function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!passwordRef.current || !confPasswordRef.current) {
      return;
    }

    const response = await attemptReset({
      variables: {
        token: props.match.params.token,
        password: passwordRef.current.value,
        confirmPassword: confPasswordRef.current.value,
      },
    });

    console.log(response.errors);
    if (!response.errors) {
      props.setUser(response.data.updatePassword);
      props.history.replace("/");
    }
  }

  return (
    <div>
      <div className="auth-form">
        {data && data.resetPassword && (
          <div className="form-success">
            A password reset link has been sent to your e-mail.
          </div>
        )}
        <form method="POST" onSubmit={formSubmitted}>
          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required={true}
              autoComplete="username"
              value={data.validateResetToken}
              disabled={true}
            />
          </div>

          {/*password*/}
          <div
            className={`form-group ${mutationErrors.password ? "error" : ""}`}
          >
            <label htmlFor="password">Password</label>
            <input
              disabled={mutationResponse.loading}
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required={true}
              autoComplete="new-password"
            />
            {mutationErrors.password && <div>{mutationErrors.password} </div>}
          </div>

          {/*confirm password*/}
          <div
            className={`form-group ${
              mutationErrors.confirmPassword ? "error" : ""
            }`}
          >
            <label htmlFor="confPassword">Confirm Password</label>
            <input
              disabled={mutationResponse.loading}
              type="password"
              id="confPassword"
              name="confPassword"
              ref={confPasswordRef}
              required={true}
              autoComplete="new-password"
            />
            {mutationErrors.confirmPassword && (
              <div>{mutationErrors.confirmPassword} </div>
            )}
          </div>

          <button type="submit" disabled={mutationResponse.loading}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(reset_pw);
