import logo from "../../images/logo/*.png";
import React from "react";
import { withRouter } from "react-router-dom";
import "./navbar.scss";
import { RouteComponentProps } from "react-router";

const nav = (props: RouteComponentProps) => {
  function navigateClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    props.history.push(e.currentTarget.pathname);
  }

  return (
    <div id="nav-backdrop">
      <a href="/" onClick={navigateClicked}>
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
      </a>

      <ul className="nav-right">
        <li>
          <a href="/register" onClick={navigateClicked}>
            Register
          </a>
        </li>
        <li>
          <a href="/login" onClick={navigateClicked}>
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(nav);
