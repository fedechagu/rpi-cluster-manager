import React from 'react';

export default class Progress extends React.Component {

  constructor() {
    super();
    this.state = { progress: 20 }
  }

  render() {

    return (

      <div>
        <progress class="progress" value={this.state.progress} max="100"></progress>
      </div>

    );
  }
}
