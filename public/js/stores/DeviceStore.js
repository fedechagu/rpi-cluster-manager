import Reflux from "reflux";
import DeviceActions from "../actions/DeviceActions";
import mqtt from 'mqtt'

let DeviceStore = Reflux.createStore({
  listenables: [DeviceActions],

  init() {
    let mqttClient = mqtt.connect({host: 'localhost', port: 9002})
    mqttClient.on('connect', function () {
      mqttClient.subscribe('devices/list')
    })

    mqttClient.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString());
    })
  },

  getInitialState() {
    this.devices = [];
    return this.devices;
  },

  onLoadDevicesCompleted(results) {
    this.devices = results.data;
    this.trigger(this.devices);
  },

  onloadDevicesFailed(results) {

  },

  addDevice() {
    const device = {
      id: Math.round((Math.random(1, 100000) * 100), 0),
      name: 'test',
      status: 'online'
    };

    this.devices.push(device);
    this.trigger(this.devices);
  }

});

export default DeviceStore;
