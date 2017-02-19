import React, {Component} from 'react';
import { Clock, CountdownForm } from 'Components';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    };
  }

  setCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  }

  startTimer() {
    this.timer  = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <h2 className="text-center page-title">
          Countdown
        </h2>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.setCountdown.bind(this)} />
      </div>
    );
  }
}

export { Countdown };
