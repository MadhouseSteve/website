import React from "react";
import DiscordUser from "../../models/DiscordUser";
import noAvatar from "../../images/no-avatar.png";
import noAvatarWebp from "../../images/no-avatar.webp";

interface IProps {
  user: DiscordUser;
}

export default (props: IProps) => {
  return (
    <div className="chat-user">
      <picture>
        <source
          srcSet={props.user.avatar_url || noAvatarWebp}
          type="image/webp"
        />
        <img
          src={props.user.avatar_url_jpg || noAvatar}
          alt={props.user.name}
        />
      </picture>
      <div className="chat-user-name">{props.user.name}</div>
      <div className="float-right">{props.user.playing}</div>
    </div>
  );
};
