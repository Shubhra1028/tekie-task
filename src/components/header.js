import React from "react";
import Logo from "../assets/spacex.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="SpaceX" />
    </div>
  );
}
