import React from "react";
import ServerStatus from "../components/ServerStatus";
import Chatbox from "../components/Chatbox";

export default () => {
  return (
    <React.Fragment>
      <div>
        <ServerStatus section="modded" />
        <ServerStatus section="vanilla" />
      </div>
      <div>
        <Chatbox />
      </div>
    </React.Fragment>
  );
};
