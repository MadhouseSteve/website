import React from "react";
import ServerStatus from "../../models/ServerStatus";
import Status from "./StatusIndicator";
import "./ServerStatus.scss";

export default (props: ServerStatus) => {
  return (
    <div className="server-status">
      <div className="server-status-right">
        <Status status={props.status} />
        <div className="server-player-count">{props.playercount} Players</div>
      </div>
      <div className="server-status-left">
        <div className="server-name">{props.name}</div>
        <div className="server-version">{props.version}</div>
      </div>
    </div>
  );
};
