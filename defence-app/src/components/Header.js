import React from "react";
import HeaderLoggedOut from "./HeaderLoggedOut";
import { useAuth } from "../contexts/AuthContext";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <HeaderLoggedIn />;
  }

  return <HeaderLoggedOut />;
}

export default Header;
