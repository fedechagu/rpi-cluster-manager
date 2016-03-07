import Reflux from "reflux";
import axios from 'axios';

const baseUrl = 'http://localhost:3000/devices'

let DeviceActions = Reflux.createActions({
  'loadDevices': { children: ['progressed', 'completed', 'failed'] },
  'addDevice': {},
  'deviceUpdated': {},
  'deleteDevice': { children: ['completed', 'failed']}
});

DeviceActions.loadDevices.listen(function() {
  this.progressed;
  axios.get(baseUrl).then(this.completed).catch(this.failed);
});

DeviceActions.deviceUpdated.listen(function() {
  //axios.get('http://localhost:3000/devices').then(this.completed).catch(this.failed);
});

DeviceActions.deleteDevice.listen(function(id) {
  axios.delete(`${baseUrl}/${id}`).then(this.completed).catch(this.failed)
})

export default DeviceActions;
