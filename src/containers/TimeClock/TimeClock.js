import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {startClock, stopClock, pauseClock, unpauseClock, createProject, toggleProject} from 'redux/modules/timeclock';
import {TCDash, ClockLog} from 'components';


class TimeClock extends Component {
  static propTypes = {
    clockState: PropTypes.object.isRequired,
    startClock: PropTypes.func.isRequired,
    pauseClock: PropTypes.func.isRequired,
    unpauseClock: PropTypes.func.isRequired,
    stopClock: PropTypes.func.isRequired,
    allProjects: PropTypes.array.isRequired,
    createProject: PropTypes.func.isRequired,
    toggleProject: PropTypes.func.isRequired,
    clockLog: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.props = {
      clockState: props.clockState,
      startClock: props.startClock,
      pauseClock: props.pauseClock,
      unpauseClock: props.unpauseClock,
      stopClock: props.stopClock,
      allProjects: props.allProjects,
      createProject: props.createProject,
      toggleProject: props.toggleProject,
      clockLog: props.clockLog
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
          toggleProject={this.props.toggleProject}
          unpauseClock={this.props.unpauseClock}
          clockLog={this.props.clockLog}
        />
        <ClockLog
          clockLog={this.props.clockLog}
        />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clockState: state.timeclock.clockState,
    allProjects: state.timeclock.allProjects,
    clockLog: state.timeclock.clockLog
  };
}

export default connect(mapStateToProps, {startClock, stopClock, pauseClock, unpauseClock, createProject, toggleProject})(TimeClock);
