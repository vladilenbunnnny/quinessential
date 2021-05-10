import React, { useEffect, useState } from "react";
import Page from "./Page";
import LogIn from "./LogIn";

function HomePage() {
  return (
    <>
      <Page title="Home Page">
        <h1>Quintessential </h1>
        <LogIn />
      </Page>
    </>
  );
}

export default HomePage;
