import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <p> Welcome </p>
      <Route path="/welcome/new-user">
        <p> Welcome, New User!</p>
      </Route>
    </section>
  );
};

export default Welcome;
