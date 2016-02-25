import React from 'react';
import { Link } from "react-router";

export default class Nav extends React.Component {
  render() {
    return (

      <div>
        <nav class="navbar navbar-dark bg-primary" style={{backgroundColor: '#4D606E!important'}}>
          <div class="container">
            <a class="navbar-brand">Cluster Manager</a>
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Settings</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    );
  }
}
