import Reflux from "reflux";
import DeviceActions from "../actions/DeviceActions";
import mqtt from 'mqtt'

let DeviceStore = Reflux.createStore({
  listenables: [DeviceActions],

  init() {
    let mqttClient = mqtt.connect({ host: 'localhost', port: 9002 })
    mqttClient.on('connect', function () {
      mqttClient.subscribe('devices/list')
    })

    let that = this
    mqttClient.on('message', this.devicesChanged)
  },

  devicesChanged(topic, message) {
    let device = JSON.parse(message)
    debugger;
    if(device.new_val == null) {
      //this.deleteDevice(device.old_val.id)
    } else {
      this.addDevice(device)
    }
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


  addDevice(device) {
    debugger;
    this.devices.push(device);
    this.trigger(this.devices);
  },

  deleteDevice(id) {
    debugger;
    const index = this.devices.findIndex(device => device.id == id)
    this.devices.splice(index, 1)
    this.trigger(this.devices)
    console.log(this.devices)
  }

});

export default DeviceStore;
