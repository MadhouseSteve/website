import React from "react";
import logoWebP from "../../images/logo/*.webp";
import logo from "../../images/logo/*.png";
import "./index.scss";

export default () => (
  <div className="splash-screen">
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
        id="logo"
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
  </div>
);
