import React, { Component } from "react";
import { render } from "react-dom";
import {
  Router,
  Switch,
  Redirect
} from "react-router";

import Home from "../components/Home";
import SearchGithub from "../components/SearchGithub";

export default (
  <Router>
    {/* <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/test1">Test 1</Link>
      </li>
      <li>
        <Link to="/test2">Test 2</Link>
      </li>
      <li>
        <Link to="/test3">Test 3</Link>
      </li>
    </ul> */}
    <Switch>
      <Redirect exact path="/" to={Home} />
    </Switch>
  </Router>
)
