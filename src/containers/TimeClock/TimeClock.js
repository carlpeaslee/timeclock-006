import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {startClock, stopClock} from 'redux/modules/timeclock';
import {TCDash} from 'components';

class TimeClock extends Component {
  static propTypes = {
    clockState: PropTypes.string.isRequired,
    startClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired
  };
  constructor(props) {
    super(props);
    this.props = {
      clockState: props.clockState,
      startClock: props.startClock,
      stopClock: props.stopClock,

    };
  }
  render() {
    return (
      <div className="container">
        <h1>TimeClock</h1>
        <Helmet title="TimeClock"/>
        <TCDash
          clockState={this.props.clockState}
          startClock={this.props.startClock}
          stopClock={this.props.stopClock}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clockState: state.timeclock.clockState
  };
}

export default connect(mapStateToProps, {startClock, stopClock})(TimeClock);
