import React, {Component} from 'react';
import { Clock, CountdownForm, Controls } from 'Components';

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

  updateStatus(status) {
    this.setState({
      countdownStatus: status
    });
  }

  startTimer() {
    this.timer  = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }

    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
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

  render() {
    const { count, countdownStatus } = this.state;
    const renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.updateStatus.bind(this)} />;
      } else {
        return <CountdownForm onSetCountdown={this.setCountdown.bind(this)} />;
      }
    }
    return (
      <div className="pageContainer">
        <h2 className="text-center page-title">Countdown App</h2>
        <Clock totalSeconds={count} />
        <div>
          {renderControlArea()}
        </div>
      </div>
    );
  }
}

export { Countdown };
