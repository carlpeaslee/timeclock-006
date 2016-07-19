import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {startClock, stopClock} from 'redux/modules/timeclock';

class TimeClock extends Component {

  render() {
    return (
      <div className="container">
        <h1>TimeClock</h1>
        <Helmet title="TimeClock"/>
      </div>
    );
  }
}

TimeClock.propTypes = {
  clockState: PropTypes.string.isRequired,
  startClock: PropTypes.func.isRequired,
  stopClock: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    clockState: state.timeclock.clockState
  };
}

export default connect(mapStateToProps, {startClock, stopClock})(TimeClock);
