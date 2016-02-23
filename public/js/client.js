import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";

//render(<SystemInfo />, document.getElementById('memory'));
//client = new Client('localhost', Number(9002), "Ui");
//client.connect();
console.log('hello fede! aa')
const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>,
app);
