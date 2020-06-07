import React from "react";

export default ({ feedback }: { feedback: string }) => (
  <div className="banner-message">
    Your whitelist application has been declined with the following reason:
    <br />
    <div className="feedback">{feedback}</div>
    <br />
    Please contact us using Discord if you need any assistance.
  </div>
);
