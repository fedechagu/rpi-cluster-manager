import React from 'react';

export default class Card extends React.Component {
  render() {
    const title = this.props.title

    return (

        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{ title }</h4>
            <span class="card-text">{this.props.children}</span>
          </div>
        </div>

    );
  }
}
