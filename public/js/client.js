import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./pages/App";
import Device from "./pages/Device";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="device/:id" component={Device} />
      <Route path="settings" component={Settings} />
    </Route>
  </Router>,
app);
