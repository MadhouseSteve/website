import React from "react";
import ServerStatus from "./ServerStatus";
import IServerStatus from "../../models/ServerStatus";

import { useQuery, useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./index.scss";

const SERVER_LIST = gql`
  query servers($category: String) {
    servers(category: $category) {
      id
      name
      version
      playercount
      status
      url
    }
  }
`;
const SERVER_LIST_SUB = gql`
  subscription serverUpdated {
    serverUpdated {
      id
      name
      version
      playercount
      status
      url
    }
  }
`;

export default (props: { section: string }) => {
  const { data, loading, error } = useQuery(SERVER_LIST, {
    variables: {
      category: props.section,
    },
  });
  useSubscription(SERVER_LIST_SUB);

  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>Error fetching server list</div>;
  }

  const serverList = data.servers.map((server: IServerStatus) => {
    if (props.section === "vanilla") delete server.url;
    return <ServerStatus key={server.id} {...server} />;
  });

  return (
    <div className="server-status-section">
      <h2>{props.section} Minecraft Network</h2>
      {props.section === "vanilla" && <h3>vanilla.madhouseminers.com</h3>}

      <div className="server-status-container">{serverList}</div>
    </div>
  );
};
