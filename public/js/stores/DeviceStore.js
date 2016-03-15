import Reflux from 'reflux'
import DeviceActions from '../actions/DeviceActions'
import mqtt from 'mqtt'

let DeviceStore = Reflux.createStore({
  listenables: [DeviceActions],

  init () {
    const mqttClient = mqtt.connect({ host: 'localhost', port: 9002 })
    mqttClient.on('connect', function () {
      mqttClient.subscribe('/devices')
    })

    mqttClient.on('message', this.devicesChanged)
  },

  devicesChanged (topic, message) {
    let messageString = JSON.parse(message)
    if (messageString.new_val === null) {
      // delete device
      const index = this.devices.findIndex(device => device.id === messageString.old_val.id)
      this.devices.splice(index, 1)
    } else if (messageString.old_val == null) {
      // add device
      this.devices.push(messageString.new_val)
    } else {
      // update device
    }
    this.trigger(this.devices)
  },

  getInitialState () {
    this.devices = []
    return this.devices
  },

  onLoadDevicesCompleted (results) {
    this.devices = results.data
    this.trigger(this.devices)
  },

  onloadDevicesFailed (results) {

  },

  addDevice (device) {
    this.trigger(this.devices)
  },

  deleteDevice (id) {
    this.trigger(this.devices)
  }
})

export default DeviceStore
