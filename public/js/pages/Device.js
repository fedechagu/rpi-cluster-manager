import React from "react";
import { Link } from "react-router";

import Nav from "../components/App/Nav";
import Card from '../components/Card'
import DeviceActions from "../actions/DeviceActions";
import DeviceStore from "../stores/DeviceStore";

class Device extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //this.unsubscribe = DeviceStore.listen(this.handleAdd);
    //this.setState({devices:DeviceStore.getDevices()});
  }

  componentWillUnmount() {
    //this.unsubscribe();
  }


  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "20px"
    };

    return (
      <div>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Device</h1>
                hello world
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Device;
