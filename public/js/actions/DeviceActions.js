import Reflux from "reflux";
import jQuery from 'jquery';

let DeviceActions = Reflux.createActions({
  'loadDevices': { children: ['progressed', 'completed', 'failed'] },
  'addDevice': {}
});

DeviceActions.loadDevices.listen(function() {
  var that = this;
  this.progressed;
  $.get('http://localhost:3000/devices').then(this.completed).fail(this.failed);

});

export default DeviceActions;
