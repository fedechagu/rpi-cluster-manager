import React from "react";
import { Link } from "react-router";

import Nav from "../components/App/Nav";
import Card from '../components/Card'
import DeviceActions from "../actions/DeviceActions";
import DeviceStore from "../stores/DeviceStore";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }
  }

  componentWillMount() {
    DeviceActions.loadDevices();
  }

  componentDidMount() {
    this.unsubscribe = DeviceStore.listen(this.updateState.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateState(newState) {
    this.setState({devices: newState});
  }

  handleAdd = () => {
    DeviceStore.addDevice();
  }

  render() {

    return (
      <div>
          <div class="row">
            <div class="col-lg-12">
              <h1>Devices</h1>
              <button class="btn btn-primary-outline pull-right" onClick={this.handleAdd}>Add</button>
              <br /><br />
              <div class="card-columns">
                {this.state.devices.map((device) =>
                  <Card link = {'/device/' + device.id}  key ={device.id} title={device.name}>Status: {device.status}</Card>)}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
