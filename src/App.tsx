import React from "react";
import logo from "./images/logo/*.png";
import './styles/colours.scss';

console.debug(logo);

export default () => (
    <div id="nav-backdrop">
        <img src={logo.logo} srcSet={`
        ${logo.logo} 618w,
        ${logo['logo@0.5x']} 309w,
        ${logo['logo@0.75x']} 463w,
        ${logo['logo@1.5x']} 926w,
        ${logo['logo@2x']} 1235w,
        ${logo['logo@3x']} 1852w,
        ${logo['logo@4x']} 2468w
        `}

             alt="Madhouse Miners Logo"
        />
    </div>
);
