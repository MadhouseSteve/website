import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "../styles/forms.scss";

const ATTEMPT_LOGIN = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email)
  }
`;

const forgot_pw = () => {
  const emailRef = React.createRef<HTMLInputElement>();
  const [attemptReset, { data, loading, error }] = useMutation(ATTEMPT_LOGIN);

  async function formSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!emailRef.current) {
      return;
    }

    await attemptReset({
      variables: {
        email: emailRef.current.value,
      },
    });
  }

  return (
    <div>
      <div className="auth-form">
        {error && (
          <div className="form-error">
            {error.message.replace("GraphQL error: ", "")}
          </div>
        )}
        {data && data.resetPassword && (
          <div className="form-success">
            A password reset link has been sent to your e-mail.
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

          <button type="submit" disabled={loading}>
            Request Password Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default forgot_pw;
