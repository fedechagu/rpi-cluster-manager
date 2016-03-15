import React from 'react'

import Card from '../components/Card'
import DeviceActions from '../actions/DeviceActions'
import DeviceStore from '../stores/DeviceStore'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      devices: [],
      isLoading: false,
      name: '',
      ip: ''
    }
  }

  componentDidMount () {
    DeviceActions.loadDevices()
    this.unsubscribe = DeviceStore.listen(newState => this.updateState(newState))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  updateState (newState) {
    this.setState({devices: newState})
  }

  handleAdd = (e) => {
    DeviceActions.addDevice(this.state.name, this.state.ip)
  }

  handleDelete (id) {
    DeviceActions.deleteDevice(id)
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleIpChange = (e) => {
    this.setState({ip: e.target.value})
  }

  render () {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    let devices = this.state.devices.map((device) => {
      return (
      <Card
        link={ `/device/${device.id}`}
        key={device.id}
        title={device.name}
        id={device.id}
        handleDelete={this.handleDelete}>
        IP: {device.ip}
      </Card>
      )
    })

    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Devices</h1>
            <button className='btn btn-primary pull-right' onClick={this.handleAdd}>Add</button>
            Name:
            <input type='text' className='input-small' value={this.state.name} onChange={this.handleNameChange}/>
            IP:
            <input type='text' className='input-small' value={this.state.ip} onChange={this.handleIpChange}/>
            <br /><br />
            <div className='card-columns'>
              {devices}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
