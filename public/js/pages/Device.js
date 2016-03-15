import React from 'react'

class Device extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    //  this.unsubscribe = DeviceStore.listen(this.handleAdd)
    //  this.setState({devices:DeviceStore.getDevices()})
  }

  componentWillUnmount () {
    // this.unsubscribe()
  }

  render () {
    const { location } = this.props
    const containerStyle = {
      marginTop: '20px'
    }

    return (
      <div>
        <div className='container' style={containerStyle}>
          <div className='row'>
            <div className='col-lg-12'>
              <h1>Device</h1>
              hello world
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Device.propTypes = {
  children: React.PropTypes.elements,
  location: React.PropTypes.object
}

export default Device
