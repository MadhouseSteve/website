import React from "react";
import ServerStatus from "../components/ServerStatus";
import Chatbox from "../components/Chatbox";
import "./homepage.scss";
import WhitelistBanner from "../components/WhitelistBanner";

export default () => {
  return (
    <React.Fragment>
      <WhitelistBanner />
      <div className="wide-left">
        <div>
          <ServerStatus section="modded" />
          <ServerStatus section="vanilla" />
        </div>
        <div>
          <Chatbox />
        </div>
      </div>
    </React.Fragment>
  );
};
