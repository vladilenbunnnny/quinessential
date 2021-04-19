import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function Header() {
  return (
    <header>
      <Nav>
        <NavItem>
          <NavLink>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Check Eligibility</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>About</NavLink>
        </NavItem>
      </Nav>
    </header>
  );
}

export default Header;
