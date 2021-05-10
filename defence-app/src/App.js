import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//My components
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CheckAvailability from "./components/CheckAvailability";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
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
