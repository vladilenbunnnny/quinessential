import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useAuth } from "../contexts/AuthContext";

function HeaderLoggedIn() {
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    await logout();
    history.push("/");
    //Logout logic goes here
    //After the log in is done, it take user to home page
    // history.push("/");
  }
  return (
    <>
      <header>
        <Nav className="HeaderContainer">
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
          <div>
            <NavItem>{currentUser.email}</NavItem>
          </div>

          <div>
            <NavItem>
              <NavLink className="HeaderItem" onClick={handleLogout}>
                Log Out
              </NavLink>
            </NavItem>
          </div>
        </Nav>
      </header>
    </>
  );
}

export default HeaderLoggedIn;
