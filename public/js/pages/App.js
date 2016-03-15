import React from 'react'

import Nav from '../components/App/Nav'

class App extends React.Component {

  render () {
    const containerStyle = {
      marginTop: '20px'
    }

    return (
      <div>
        <Nav />
        <div className='container' style={containerStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}

export default App
