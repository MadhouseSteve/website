import { ServerStatuses } from "../../models/ServerStatus";
import React from "react";

export default (props: { status: ServerStatuses }) => {
  let text = "";

  switch (props.status) {
    case ServerStatuses.ONLINE:
      text = "Online";
      break;

    case ServerStatuses.OFFLINE:
      text = "Offline";
      break;

    case ServerStatuses.STARTING:
      text = "Starting";
      break;

    case ServerStatuses.STOPPING:
      text = "Stopping";
      break;

    case ServerStatuses.UNKNOWN:
      text = "Unknown";
      break;

    default:
      return null;
  }

  return (
    <div className={"server-status-indicator " + text}>
      <div className="server-status-dot" />
      {text}
    </div>
  );
};
