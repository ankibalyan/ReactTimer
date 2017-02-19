import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Controls extends Component {
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }

  render() {
    const {countdownStatus} = this.props;

    const renderStatusButton = () => {
        if (countdownStatus === 'started') {
          return <button onClick={this.onStatusChange('paused').bind(this)} className="button secondary">Pause</button>
        } else if (countdownStatus === 'paused') {
          return <button onClick={this.onStatusChange('started').bind(this)} className="button primary">Start</button>
        }
    }

    return(
      <div className="controls">
        {renderStatusButton()}
        <button onClick={this.onStatusChange('stopped').bind(this)} className="button alert hollow">Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: PropTypes.string.isRequired,
  onStatusChange: PropTypes.func.isRequired
};

export {Controls};
