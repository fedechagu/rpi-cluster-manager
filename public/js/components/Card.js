import React from 'react'
import { Link } from 'react-router'

class Card extends React.Component {

  constructor (props) {
    super(props)
  }

  handleClick () {
    this.props.handleDelete(this.props.id)
  }

  render () {
    const { title, link } = this.props

    const imageStyle = {
      width: 4 + 'em',
      marginTop: 1 + 'em'
    }
    const cardFooterStyle = {
      backgroundColor: '#3FBAC2',
      color: 'white'
    }
    return (
        <div className='card text-xs-center'>
          <div className = 'pull-right' onClick={() => this.handleClick()}>DELETE</div>
          <Link to={link}>
            <img className='card-img-top' src='../../images/rpi_logo.png' style={imageStyle}/>
            <div className='card-block'>
              <h4 className='card-title'>{ title }</h4>
              <p className='card-text'>{this.props.children}</p>
            </div>
            <div className='card-footer text-muted' style={cardFooterStyle}>
              Last Update: { Math.round(Math.random() * 100, 2) } seconds ago
            </div>
          </Link>
        </div>
    )
  }
}

Card.propTypes = {
  children: React.PropTypes.element,
  title: React.PropTypes.string,
  link: React.PropTypes.object,
  id: React.PropTypes.Integer,
  handleDelete: React.PropTypes.func
}

export default Card
