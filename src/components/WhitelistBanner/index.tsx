import React from "react";

import "./index.scss";

import { WhitelistStatus } from "../../models/User";
import { UserContext } from "../../App";

import RequestForInfo from "./RequestForInfo";
import Denied from "./Denied";
import None from "./None";
import Submitted from "./Submitted";

export default () => {
  const user = React.useContext(UserContext);

  if (!user) {
    return null;
  }

  switch (user.whitelist.status) {
    case WhitelistStatus.REQUEST_FOR_INFO:
      return <RequestForInfo feedback={user.whitelist.feedback} />;

    case WhitelistStatus.DENIED:
      return <Denied feedback={user.whitelist.feedback} />;

    case WhitelistStatus.NONE:
      return <None />;

    case WhitelistStatus.SUBMITTED:
      return <Submitted />;
  }

  return null;
};
