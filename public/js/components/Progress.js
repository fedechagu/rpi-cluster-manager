import React from 'react';

class Progress extends React.Component {

  constructor() {
    super();
    this.state = { progress: 80 }
  }

  render() {

    return (

      <div>
        <progress class="progress" value={this.state.progress} max="100"></progress>
      </div>

    );
  }
}

export default Progress;
