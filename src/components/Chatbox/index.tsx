import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Message from "./Message";
import IMessage from "../../models/Message";
import "./index.scss";
import discord from "../../images/discord/*.png";
import discordWebP from "../../images/discord/*.webp";

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
        <picture>
          <source
            type="image/webp"
            srcSet={`
            ${discordWebP.discord} 100w,
            ${discordWebP["discord@1.5x"]} 150w,
            ${discordWebP["discord@2x"]} 200w,
            ${discordWebP["discord@3x"]} 300w
      `}
          />
          <img
            src={discord.discord}
            srcSet={`
            ${discord.discord} 100w,
            ${discord["discord@0.5x"]} 50w,
            ${discord["discord@0.75x"]} 75w,
            ${discord["discord@1.5x"]} 150w,
            ${discord["discord@2x"]} 200w,
            ${discord["discord@3x"]} 300w
          `}
            id="discord-logo"
            alt="Join our Discord Server"
          />
        </picture>
      </a>
      <h2>Network Chat</h2>
      {messages}
    </div>
  );
};
