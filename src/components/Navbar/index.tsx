import logo from "../../images/logo/*.png";
import logoWebP from "../../images/logo/*.webp";
import React from "react";
import { withRouter } from "react-router-dom";
import "./navbar.scss";
import { RouteComponentProps } from "react-router";
import { UserContext } from "../../App";
import User from "../../models/User";

import Anonymous from "./Anonymous";
import UserMenu from "./User";

interface IProps {
  doLogout: (e: React.MouseEvent) => void;
}

const nav = (props: RouteComponentProps & IProps) => {
  const [navState, setNavState] = React.useState<boolean>(false);
  const user = React.useContext<User | null>(UserContext);

  function navigateClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    setNavState(false);
    props.history.push(e.currentTarget.pathname);
  }

  function switchNav() {
    setNavState(!navState);
  }

  let Menu = (
    <Anonymous navState={navState} navigateClicked={navigateClicked} />
  );
  console.log(user);
  if (user) {
    Menu = (
      <UserMenu
        navState={navState}
        navigateClicked={navigateClicked}
        doLogout={props.doLogout}
      />
    );
  }

  return (
    <div id="nav-backdrop">
      <a href="/" onClick={navigateClicked}>
        <picture>
          <source
            type="image/webp"
            srcSet={`
      ${logoWebP.logo} 618w,
      ${logoWebP["logo@0.5x"]} 309w,
      ${logoWebP["logo@0.75x"]} 463w,
      ${logoWebP["logo@1.5x"]} 926w,
      ${logoWebP["logo@2x"]} 1235w,
      ${logoWebP["logo@3x"]} 1852w,
      ${logoWebP["logo@4x"]} 2468w
      `}
          />
          <img
            src={logo.logo}
            srcSet={`
      ${logo.logo} 618w,
      ${logo["logo@0.5x"]} 309w,
      ${logo["logo@0.75x"]} 463w,
      ${logo["logo@1.5x"]} 926w,
      ${logo["logo@2x"]} 1235w,
      ${logo["logo@3x"]} 1852w,
      ${logo["logo@4x"]} 2468w
      `}
            alt="Madhouse Miners Logo"
          />
        </picture>
      </a>

      <div className="burger-menu" onClick={switchNav}>
        <div />
        <div />
        <div />
      </div>

      <div className="nav-right">{Menu}</div>
    </div>
  );
};

export default withRouter(nav);
