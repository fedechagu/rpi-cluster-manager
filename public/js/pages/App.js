import React from "react";
import { Link } from "react-router";

import Nav from "../components/App/Nav";
import Card from '../components/Card'
import Progress from "../components/Progress"
import DeviceActions from "../actions/DeviceActions";
import DeviceStore from "../stores/DeviceStore";

class App extends React.Component {

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "20px"
    };

    return (
      <div>
        <Nav />
        <div class="container" style={containerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
