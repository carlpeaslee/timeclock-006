import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {startClock, stopClock, pauseClock, createProject} from 'redux/modules/timeclock';
import {TCDash} from 'components';

class TimeClock extends Component {
  static propTypes = {
    clockState: PropTypes.string.isRequired,
    startClock: PropTypes.func.isRequired,
    pauseClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired,
    allProjects: PropTypes.array.isRequired,
    createProject: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.props = {
      clockState: props.clockState,
      startClock: props.startClock,
      pauseClock: props.pauseClock,
      stopClock: props.stopClock,
      allProjects: props.allProjects,
      createProject: props.createProject,
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
          pauseClock={this.props.pauseClock}
          allProjects={this.props.allProjects}
          createProject={this.props.createProject}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clockState: state.timeclock.clockState,
    allProjects: state.timeclock.allProjects
  };
}

export default connect(mapStateToProps, {startClock, stopClock, pauseClock, createProject})(TimeClock);
