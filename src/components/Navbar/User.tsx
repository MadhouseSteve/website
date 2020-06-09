import React from "react";
import { UserContext } from "../../App";

interface IProps {
  navState: boolean;
  navigateClicked: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  doLogout: (e: React.MouseEvent) => void;
}

export default (props: IProps) => {
  const user = React.useContext(UserContext);

  let reviewerLink = null;
  if (user && user.reviewer) {
    reviewerLink = (
      <li>
        <a href="/whitelist/review" onClick={props.navigateClicked}>
          Review Applications
        </a>
      </li>
    );
  }

  return (
    <ul className={props.navState ? "open" : ""}>
      {reviewerLink}
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
};
