import React, {Component, PropTypes} from 'react';

class CtrlButtons extends Component {
  static propTypes = {
    clockState: PropTypes.string.isRequired,
    startClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired
  };
  render() {

    return (
        <div>
            <h3>{this.props.clockState}</h3>
            {
              this.props.clockState === 'NOT_RUNNING' ?
              <button
                onClick={this.props.startClock}
              >Start</button>
              :
              <button
                onClick={this.props.stopClock}
              >Stop</button>
            }
            <button>Pause</button>
        </div>
    );
  }
}

export default CtrlButtons;
