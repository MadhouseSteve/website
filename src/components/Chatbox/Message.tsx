import React from "react";
import IMessage from "../../models/Message";
import moment from "moment";
import "./Message.scss";

interface IProps {
  message: IMessage;
}

export default (props: IProps) => (
  <div className="chat-message">
    <div className="chat-message-header-row">
      <div className="chat-message-sender">{props.message.sender}</div>
      <div className="chat-message-server">{props.message.server}</div>
      <div className="chat-message-sent">
        {moment(props.message.sent).fromNow()}
      </div>
    </div>
    <div>{props.message.message}</div>
  </div>
);
