import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Card from '../components/Card'
import Progress from "../components/Progress"
import DeviceActions from "../actions/DeviceActions";
import DeviceStore from "../stores/DeviceStore";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }
  }

  componentDidMount() {
    this.unsubscribe = DeviceStore.listen(this.handleAdd);
    this.setState({devices:DeviceStore.getDevices()});
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAdd = () => {
    DeviceStore.addDevice();
    this.setState({devices:DeviceStore.getDevices()});
  }

  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "20px"
    };

    return (
      <div>
        <Nav />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Devices</h1>
              <button class="btn btn-primary-outline pull-right" onClick={this.handleAdd}>Add</button>
              <br />  <br />
                <div class="card-columns">
                  {this.state.devices.map((device) =>
                    <Card key ={device.id} title={device.name}>Status: {device.status}</Card>)}
                </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
