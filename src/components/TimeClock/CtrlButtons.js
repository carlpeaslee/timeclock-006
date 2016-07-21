import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class CtrlButtons extends Component {
  static propTypes = {
    clockState: PropTypes.object.isRequired,
    startClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired,
    pauseClock: PropTypes.func.isRequired,
    unpauseClock: PropTypes.func.isRequired
  };
  render() {
    const clockDirection = this.props.clockState.running;
    const startStopPause = () => {
      switch (clockDirection) {
        case 'STOPPED': {
          return (
            <div>
              <Button
                bsStyle="success"
                onClick={this.props.startClock}
              >Start</Button>
            </div>
          );
        }
        case 'RUNNING': {
          return (
            <div>
              <Button
                bsStyle="danger"
                onClick={this.props.stopClock}
              >Stop</Button>
              <Button
                onClick={this.props.pauseClock}
              >Pause</Button>
            </div>
          );
        }
        case 'PAUSED': {
          return (
            <div>
              <Button
                bsStyle="danger"
                onClick={this.props.stopClock}
              >Stop</Button>
              <Button
                bsStyle="info"
                onClick={this.props.unpauseClock}
              >Resume</Button>
            </div>
          );
        }
        default: {
          return (
            <h1>"Uh oh"</h1>
          );
        }
      }
    };
    return (
      <div>
        {startStopPause()}
      </div>
    );
  }
}

export default CtrlButtons;
