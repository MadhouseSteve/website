import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

import "./clickable.scss";

interface IProps {
  feedback: string;
}

const banner = ({ feedback, history }: RouteComponentProps & IProps) => {
  function navigate() {
    history.push("/whitelist");
  }

  return (
    <div className="banner-message" onClick={navigate}>
      Your whitelist application has been reviewed and we require further
      information.
      <br />
      {feedback}
      <br />
      Click here to proceed to the whitelisting form. Please contact us using
      Discord if you need any assistance.
    </div>
  );
};

export default withRouter(banner);
