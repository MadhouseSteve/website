import React from "react";
import "./index.scss";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import ChatUser from "./ChatUser";
import DiscordUser from "../../models/DiscordUser";
import * as discordLogo from "../../images/discord/*.png";
import * as discordLogoWebp from "../../images/discord/*.webp";
import * as ReactWindow from "react-window";

const FETCH_QUERY = gql`
  {
    discordUsers {
      id
      status
      name
      playing
      avatar_url
      avatar_url_jpg
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(FETCH_QUERY);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error!</div>;
  }

  const userList = data.discordUsers.map((user: DiscordUser) => (
    <ChatUser key={user.id} user={user} />
  ));

  function getList({ index, style }: ReactWindow.ListChildComponentProps) {
    const user = data.discordUsers[index];
    return (
      <div style={style}>
        <ChatUser key={user.id} user={user} />
      </div>
    );
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <a
          href="https://discord.gg/ApNnwac"
          target="_blank"
          aria-label="Join our Discord Server"
          rel="noreferrer"
        >
          <picture>
            <source
              srcSet={discordLogoWebp["discord@1.5x"]}
              type="image/webp"
            />
            <img src={discordLogo["discord@1.5x"]} alt="Discord logo" />
          </picture>
        </a>
        <div className="float-right">{userList.length} members online</div>
      </div>
      <ReactWindow.FixedSizeList
        itemSize={25}
        height={450}
        itemCount={userList.length}
        width="100%"
        className="chat-list"
      >
        {getList}
      </ReactWindow.FixedSizeList>
    </div>
  );
};
