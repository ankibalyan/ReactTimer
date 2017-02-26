import React, { Component } from 'react';
import { Clock, Controls } from 'Components';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      timerStatus: 'paused'
    }
  }
  updateStatus(status) {
    this.setState({
      timerStatus: status
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
            clearInterval(this.timer);
            this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000);
  }

  render() {
    const { count, timerStatus } = this.state;
    return (
      <div className="pageContainer">
        <h2 className="text-center page-title">Timer App</h2>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.updateStatus.bind(this)} />
      </div>
    );
  }
}

export { Timer };
