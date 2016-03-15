import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-dark bg-primary' style={{backgroundColor: '#4D606E!important'}}>
          <div className='container'>
            <span className='navbar-brand'>Cluster Manager</span>
            <ul className='nav navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/settings'>Settings</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
