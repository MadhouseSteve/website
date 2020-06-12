import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import "../styles/forms.scss";
import { RouteComponentProps } from "react-router";
import { LoginPayload } from "../App";
import Homepage from "./homepage";

interface IProps {
  setUser: (payload: LoginPayload) => void;
}

const VERIFY_ACCOUNT = gql`
  mutation verifyAccount($token: String!) {
    verifyAccount(token: $token) {
      token
      user {
        id
        displayName
        reviewer
      }
    }
  }
`;

const reset_pw = (props: RouteComponentProps<{ token: string }> & IProps) => {
  const [attemptReset, { data, error, loading }] = useMutation(VERIFY_ACCOUNT, {
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
  if (!data) {
    (async () => {
      const response = await attemptReset();
      if (response.data) {
        props.setUser(response.data.verifyAccount);
      }
    })();
  }

  return (
    <div>
      <div className="auth-form">
        {data && data.verifyAccount && (
          <div className="form-success">Your account has been verified.</div>
        )}
      </div>

      <Homepage />
    </div>
  );
};

export default withRouter(reset_pw);
