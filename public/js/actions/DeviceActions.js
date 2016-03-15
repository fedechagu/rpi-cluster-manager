import Reflux from 'reflux'
import axios from 'axios'

const baseUrl = 'http://localhost:3000/devices'

let DeviceActions = Reflux.createActions({
  'loadDevices': { children: ['progressed', 'completed', 'failed'] },
  'addDevice': {},
  'deviceUpdated': {},
  'deleteDevice': { children: ['completed', 'failed'] }
})

DeviceActions.loadDevices.listen(function () {
  this.progressed
  axios.get(baseUrl).then(this.completed).catch(this.failed)
})

DeviceActions.deviceUpdated.listen(function () {
  axios.get(baseUrl).then(this.completed).catch(this.failed)
})

DeviceActions.addDevice.listen(function () {
  let device = {name: 'test', ip: '127.0.0.1'}
  axios.post(baseUrl, device).then(function (results) {
    
  })
})

DeviceActions.deleteDevice.listen(function (id) {
  axios.delete(`${baseUrl}/${id}`)
})

export default DeviceActions
