import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class CtrlButtons extends Component {
  static propTypes = {
    clockState: PropTypes.string.isRequired,
    startClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired,
    pauseClock: PropTypes.func.isRequired
  };
  render() {
    return (
      <div>
          <h3>{this.props.clockState}</h3>
          {
            this.props.clockState === 'STOPPED' ?
            <Button
              bsStyle="success"
              onClick={this.props.startClock}
            >Start</Button>
            :
            <Button
              bsStyle="danger"
              onClick={this.props.stopClock}
            >Stop</Button>
          }
          {
            this.props.clockState === 'PAUSED' ?
            <Button
              bsStyle="info"
              onClick={this.props.startClock}
            >Resume</Button>
            :
            <span/>
          }
          {
            this.props.clockState === 'RUNNING' ?
            <Button
              onClick={this.props.pauseClock}
            >Pause</Button>
            :
            <span/>
          }
      </div>
    );
  }
}

export default CtrlButtons;
