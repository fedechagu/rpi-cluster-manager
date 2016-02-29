import React from 'react';
import { Link } from "react-router";

class Card extends React.Component {
  render() {
    const { title, link } = this.props;

    const imageStyle = {
      width: 4 + 'em',
      marginTop: 1 + 'em'
    }
    const cardFooterStyle = {
      backgroundColor: '#3FBAC2',
      color: 'white'
    }
    return (
      <Link to={link ? link : null}>
        <div class="card text-xs-center">
          <img class="card-img-top" src="../../images/rpi_logo.png" class="" style={imageStyle}/>
            <div class="card-block">
              <h4 class="card-title">{ title }</h4>
              <p class="card-text">{this.props.children}</p>
            </div>
          <div class="card-footer text-muted" style={cardFooterStyle}>
            Last Update: { Math.round(Math.random() * 100, 2) } seconds ago
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
