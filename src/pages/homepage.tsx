import React from "react";
import ServerStatus from "../components/ServerStatus";
import Chatbox from "../components/Chatbox";
import "./homepage.scss";

export default () => {
  return (
    <div className="wide-left">
      <div>
        <ServerStatus section="modded" />
        <ServerStatus section="vanilla" />
      </div>
      <div>
        <Chatbox />
      </div>
    </div>
  );
};
