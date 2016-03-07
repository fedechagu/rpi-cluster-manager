import React from 'react';
import { Link } from "react-router";

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.handleDelete(this.props.id)
  }

  render() {
    const { title, link, id, handleDelete } = this.props;

    const imageStyle = {
      width: 4 + 'em',
      marginTop: 1 + 'em'
    }
    const cardFooterStyle = {
      backgroundColor: '#3FBAC2',
      color: 'white'
    }
    return (
        <div class="card text-xs-center">
          <div className = 'pull-right' onClick={() => this.handleClick()}>DELETE</div>
          <Link to={link}>
          <img class="card-img-top" src="../../images/rpi_logo.png" class="" style={imageStyle}/>
            <div class="card-block">
              <h4 class="card-title">{ title }</h4>
              <p class="card-text">{this.props.children}</p>
            </div>
          <div class="card-footer text-muted" style={cardFooterStyle}>
            Last Update: { Math.round(Math.random() * 100, 2) } seconds ago
          </div>
          </Link>
        </div>
    );
  }
};

export default Card;
