import React, { Component, PropTypes } from 'react';

class CountdownForm extends Component {
  onFormSubmit(e) {
    e.preventDefault();
    const strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input
          type="text"
          ref="seconds"
          placeholder="Enter the time in seconcs"
        />
        <input type="submit" value="Start" className="button expanded" />
      </form>
    );
  }
}

export {CountdownForm};
