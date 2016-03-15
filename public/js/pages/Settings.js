import React from 'react'

class Settings extends React.Component {

  render () {
    const { location } = this.props
    const containerStyle = {
      marginTop: '20px'
    }

    return (
      <div>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Settings</h1>
            hello world
          </div>
        </div>
      </div>
    )
  }
}

Settings.propTypes = {
  location: React.PropTypes.object
}

export default Settings
