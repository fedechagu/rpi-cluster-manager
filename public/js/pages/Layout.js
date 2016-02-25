import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Card from '../components/Card'
import Progress from "../components/Progress"

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [
        {
          id: 1,
          name: 'jenkins',
          status: 'online'
        },
        {
          id: 2,
          name: 'mosquitto',
          status: 'online'
        },
        {
          id: 3,
          name: 'nginx',
          status: 'online'
        },
        {
          id: 4,
          name: 'spark-master',
          status: 'online'
        },
        {
          id: 5,
          name: 'spark-slave-1',
          status: 'online'
        },
        {
          id: 6,
          name: 'spark-slave-2',
          status: 'offline'
        }
      ]
    }
  }

  handleClick() {
    const device = {
      id: Math.round((Math.random(1, 100000) * 100), 0),
      name: 'test',
      status: 'online'
    };

    const devices = this.state.devices;
    devices.push(device);
    this.setState({ devices: devices });
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
              <button class="btn btn-primary-outline pull-right" onClick={this.handleClick.bind(this)}>Add</button>
              <br />  <br />
                <div class="card-columns">
                  { this.state.devices.map((device) => <Card key ={device.id} title={device.name}>Status: {device.status}</Card>) }
                </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
