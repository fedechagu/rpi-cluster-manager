import React from 'react';
import { Link } from "react-router";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary" style={{backgroundColor: '#4D606E!important'}}>
          <div class="container">
            <span class="navbar-brand">Cluster Manager</span>
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
