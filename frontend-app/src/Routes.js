import React from "react";
import { Route, Switch } from "react-router-dom";
import Customers from "./containers/Customers";
import Login from "./containers/Login";
import Admin from "./containers/Admin";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Customers />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      
    </Switch>
  );
}