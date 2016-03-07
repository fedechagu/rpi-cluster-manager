import Reflux from "reflux";
import axios from 'axios';

let DeviceActions = Reflux.createActions({
  'loadDevices': { children: ['progressed', 'completed', 'failed'] },
  'addDevice': {},
  'deviceUpdated': {}
});

DeviceActions.loadDevices.listen(function() {
  this.progressed;
  axios.get('http://localhost:3000/devices').then(this.completed).catch(this.failed);
});

DeviceActions.deviceUpdated.listen(function() {
  console.log('add')
  //axios.get('http://localhost:3000/devices').then(this.completed).catch(this.failed);
});

export default DeviceActions;
