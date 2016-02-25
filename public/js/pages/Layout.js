import React from "react";
import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Card from '../components/Card'
import Progress from "../components/Progress"

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "20px"
    };
    const devices = [
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
    ];

    return (

      <div>
        <Nav />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Devices</h1>
              <br />
                <div class="card-columns">
                  { devices.map((device) => <Card key ={device.id} title={device.name}>Status: {device.status}</Card>) }
                </div>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
