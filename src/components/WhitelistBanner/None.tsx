import React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";

import "./clickable.scss";

const banner = ({ history }: RouteComponentProps) => {
  function navigate() {
    history.push("/whitelist");
  }

  return (
    <div className="banner-message" onClick={navigate}>
      You haven't applied for whitelisting yet. Until you do you will not be
      able to access our servers.
      <br />
      Click here to proceed to the whitelisting form.
    </div>
  );
};

export default withRouter(banner);
