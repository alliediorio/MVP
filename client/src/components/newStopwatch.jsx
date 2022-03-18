import React from 'react';

class NewStopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: false
    }
  }

  startTime() {
    let interval = null;
    if (this.state.start) {
      interval = setInterval(() => {
        this.setState({
          time: this.state.time + 10
        })
      }, 10)
    } else {
      clearInterval(interval);
    }
  }

  render() {
    return (
      <div>
        <h1>Stopwatch</h1>
      </div>
    )
  }
}

export default NewStopwatch;