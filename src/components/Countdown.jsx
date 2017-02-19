import React, {Component} from 'react';
import { Clock, CountdownForm } from 'Components';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: ''
    };
  }

  setCountdown(seconds) {
    this.setState({
      count: seconds
    });
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
