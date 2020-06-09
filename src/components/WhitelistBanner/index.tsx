import React from "react";

import "./index.scss";

import { WhitelistStatus } from "../../models/User";
import { UserContext } from "../../App";

import RequestForInfo from "./RequestForInfo";
import Denied from "./Denied";
import None from "./None";
import Submitted from "./Submitted";
import Accepted from "./Accepted";

interface IProps {
  status?: string;
  feedback?: string;
}

export default (props: IProps) => {
  const user = React.useContext(UserContext);

  if (!user) {
    return null;
  }

  switch (props.status ?? user.whitelist.status) {
    case WhitelistStatus.REQUEST_FOR_INFO:
      return (
        <RequestForInfo feedback={props.feedback ?? user.whitelist.feedback} />
      );

    case WhitelistStatus.DENIED:
      return <Denied feedback={props.feedback ?? user.whitelist.feedback} />;

    case WhitelistStatus.NONE:
      return <None />;

    case WhitelistStatus.SUBMITTED:
      return <Submitted />;

    case WhitelistStatus.ACCEPTED:
      return <Accepted />;
  }

  return null;
};
