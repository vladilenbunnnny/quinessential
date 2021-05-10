import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

function HeaderLoggedOut() {
  return (
    <>
      <header>
        <Nav className="HeaderContainer">
          <div className="HeaderDiv">
            <div>
              <NavItem>
                <NavLink className="HeaderItem" tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
            </div>
            <div>
              <NavItem>
                <NavLink
                  className="HeaderItem"
                  tag={Link}
                  to="/Check_Avaliabiliy"
                >
                  Check Avaliabiliy
                </NavLink>
              </NavItem>
            </div>
          </div>

          <div>
            <NavItem>
              <NavLink className="HeaderItem" tag={Link} to="/signUp">
                Sign Up
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </header>
    </>
  );
}

export default HeaderLoggedOut;
