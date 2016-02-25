import React from 'react';
import mqtt from "mqtt";

var client  = mqtt.connect('ws://localhost:9002');

client.on('connect', function () {
  client.subscribe('system/performance');
});

client.on('message', function (topic, message) {
  let perf = JSON.parse(message.toString());
  console.log(perf);
});

export default class Progress extends React.Component {

  constructor() {
    super();
    this.state = { progress: 80 }
  }

  render() {

    return (

      <div>
        <progress class="progress" value={this.state.progress} max="100"></progress>
      </div>

    );
  }
}
