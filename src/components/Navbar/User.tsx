import React from "react";

interface IProps {
  navState: boolean;
  navigateClicked: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  doLogout: (e: React.MouseEvent) => void;
}

export default (props: IProps) => (
  <ul className={props.navState ? "open" : ""}>
    <li>
      <a href="/whitelist" onClick={props.navigateClicked}>
        Whitelist Application
      </a>
    </li>
    <li>
      <a href="/logout" onClick={props.doLogout}>
        Logout
      </a>
    </li>
  </ul>
);
