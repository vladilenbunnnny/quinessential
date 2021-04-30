import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//My components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CheckAvailability from "./components/CheckAvailability";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <Switch>
        {/* <p>Hi</p> */}
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Check_Avaliabiliy">
          <CheckAvailability />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;
