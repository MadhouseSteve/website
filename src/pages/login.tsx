import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import "../styles/forms.scss";
import { RouteComponentProps } from "react-router";
import { LoginPayload } from "../App";

const ATTEMPT_LOGIN = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      token
      user {
        id
        displayName
        reviewer
      }
    }
  }
`;

interface IProps {
  setUser: (payload: LoginPayload) => void;
}

const Login = (props: RouteComponentProps & IProps) => {
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const [attemptLogin, { loading, error }] = useMutation(ATTEMPT_LOGIN);

  async function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) {
      return;
    }

    const response = await attemptLogin({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });

    props.setUser(response.data.authenticate);
    props.history.replace("/");
  }

  return (
    <div>
      <div className="auth-form">
        {error && (
          <div className="form-error">
            {error.message.replace("GraphQL error: ", "")}
          </div>
        )}
        <form method="POST" onSubmit={formSubmitted}>
          <div className="form-group">
            <label htmlFor="email">E-mail Address</label>
            <input
              disabled={loading}
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              required={true}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              disabled={loading}
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              required={true}
              autoComplete="current-password"
            />
          </div>

          <button type="submit" disabled={loading}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);
