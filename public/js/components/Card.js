import React from 'react';

export default class Card extends React.Component {
  render() {
    const body = this.props.body;
    const title = this.props.title
debugger;
    return (

        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{ title }</h4>
            <p class="card-text">{ body }</p>
          </div>
        </div>

    )
  }
}
