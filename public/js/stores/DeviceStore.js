import Reflux from "reflux";
import DeviceActions from "../actions/DeviceActions";

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

let DeviceStore = Reflux.createStore({
  listenables: [DeviceActions],

  init() {

  },

  addDevice() {
    const device = {
      id: Math.round((Math.random(1, 100000) * 100), 0),
      name: 'test',
      status: 'online'
    };

    const newDevices = devices;
    newDevices.push(device);

    return newDevices;

  },

  getDevices() {
    return devices;
  }

});

export default DeviceStore;
