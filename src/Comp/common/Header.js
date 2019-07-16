import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStyle = { color: "blue" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {"|"}
      <NavLink to="/show" activeStyle={activeStyle}>
        Add Show
      </NavLink>
    </nav>
  );
};
export default Header;
