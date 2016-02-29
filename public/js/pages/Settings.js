import React from "react";
import { Link } from "react-router";

import Nav from "../components/App/Nav";

class Settings extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "20px"
    };

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <h1>Settings</h1>
              hello world
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
