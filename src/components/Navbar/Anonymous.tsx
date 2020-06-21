import React from "react";

interface IProps {
  navState: boolean;
  navigateClicked: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default (props: IProps) => (
  <ul className={props.navState ? "open" : ""}>
    <li>
      <a href="/forgot_pw" onClick={props.navigateClicked}>
        Reset Password
      </a>
    </li>
    <li>
      <a href="/register" onClick={props.navigateClicked}>
        Register
      </a>
    </li>
    <li>
      <a href="/login" onClick={props.navigateClicked}>
        Login
      </a>
    </li>
  </ul>
);
