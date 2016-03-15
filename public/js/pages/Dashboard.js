import React from 'react'
import { Link } from 'react-router'

import Nav from '../components/App/Nav'
import Card from '../components/Card'
import DeviceActions from '../actions/DeviceActions'
import DeviceStore from '../stores/DeviceStore'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      devices: [],
      isLoading: false
    }
  }

  componentDidMount() {
    DeviceActions.loadDevices()
    this.unsubscribe = DeviceStore.listen(newState => this.updateState(newState))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  updateState(newState) {
    this.setState({devices: newState})
  }

  handleAdd = () => {
    DeviceActions.addDevice()
  }

  handleDelete = (id) => {
    DeviceActions.deleteDevice(id)
  }

  render() {

    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    let devices = this.state.devices.map((device) => {
      return <Card link = { `/device/${device.id}`}  key ={device.id} title={device.name} id = {device.id} handleDelete={this.handleDelete}>Status: {device.status}</Card>
    })

    return (
      <div>
        <div class='row'>
          <div class='col-lg-12'>
            <h1>Devices</h1>
            <button class='btn btn-primary-outline pull-right' onClick={this.handleAdd}>Add</button>
            <br /><br />
              <div class='card-columns'>
                {devices}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Dashboard
