import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Message from "./Message";
import IMessage from "../../models/Message";
import "./index.scss";
import discord from "../../images/discord.png";

const GET_CHAT = gql`
  query {
    chat {
      id
      server
      sender
      sent
      message
    }
  }
`;

export default () => {
  const { data, error, loading } = useQuery<{ chat: IMessage[] }>(GET_CHAT);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error loading chat</div>;
  }

  let messages;
  if (data) {
    messages = data.chat.map((message) => (
      <Message key={message.id} message={message} />
    ));
  }

  return (
    <div className="chat">
      <a href="https://discord.gg/8DF4Cg">
        <img src={discord} id="discord-logo" alt="Join our Discord Server" />
      </a>
      <h2>Network Chat</h2>
      {messages}
    </div>
  );
};
