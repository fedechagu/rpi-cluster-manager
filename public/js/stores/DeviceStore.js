import Reflux from "reflux";
import DeviceActions from "../actions/DeviceActions";

let DeviceStore = Reflux.createStore({
  listenables: [DeviceActions],

  init() {

  },

  getInitialState() {
    this.devices = [];
    return this.devices;
  },

  onLoadDevicesCompleted(results) {
    this.devices = results;
    this.trigger(this.devices);
  },

  addDevice() {
    const device = {
      id: Math.round((Math.random(1, 100000) * 100), 0),
      name: 'test',
      status: 'online'
    };

    this.devices.push(device);
    this.trigger(this.devices);
  },

  updateDevices() {
    this.trigger(this.devices);
  }

});

export default DeviceStore;
