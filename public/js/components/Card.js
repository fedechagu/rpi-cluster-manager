import React from 'react';

class Card extends React.Component {
  render() {
    const title = this.props.title
    const cardStyle = {
    }
    const imageStyle = {
      width: 4 + 'em',
      marginTop: 1 + 'em'
    }
    const cardFooterStyle = {
      backgroundColor: '#3FBAC2',
      color: 'white'
    }
    return (
        <div class="card text-xs-center" style={cardStyle}>
          <img class="card-img-top" src="../../images/rpi_logo.png" class="" style={imageStyle}/>
          <div class="card-block">
            <h4 class="card-title">{ title }</h4>
            <p class="card-text">{this.props.children}</p>
          </div>
          <div class="card-footer text-muted" style={cardFooterStyle}>
            Last Update: { Math.round(Math.random() * 100, 2) } seconds ago
          </div>
        </div>
    );
  }
};

export default Card;
