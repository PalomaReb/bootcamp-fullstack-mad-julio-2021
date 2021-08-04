import React from "react";
import Telephone from "./telephone";
import Email from "./email";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import HeaderFalse from "../../components/header-false";

function Contact() {
  let match = useRouteMatch();
  return (
    <div>
      <HeaderFalse></HeaderFalse>
      <Switch>
        <Route path={`${match.url}/Telephone`}>
          <Telephone></Telephone>
        </Route>
        <Route path={`${match.url}/Email`}>
          <Email></Email>
        </Route>
        <Route path={`${match.url}`}>
          <Telephone></Telephone>
        </Route>
      </Switch>
    </div>
  );
}

export default Contact;
