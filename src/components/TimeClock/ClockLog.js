import React, {Component, PropTypes} from 'react';
import {Table} from 'react-bootstrap';


class ClockLog extends Component {
  static propTypes = {
    clockLog: PropTypes.array.isRequired
  };
  render() {
    const allLogList = this.props.clockLog.map(
      (log) => {
        const activeProjectList = [];
        log.activeProjects.forEach(
          (project) => {
            activeProjectList.push(project.projectName + '');
          }
        );
        return (
          <tr
            key={log.logId}
          >
            <td>{log.timerSessionId}</td>
            <td>{log.timeStamp}</td>
            <td>{log.action}</td>
            <td>{activeProjectList}</td>
            <td>{log.logId}</td>
          </tr>
        );
      }
    );
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>timerSessionId</th>
            <th>timeStamp</th>
            <th>action</th>
            <th>activeProjects</th>
            <th>actionId</th>
          </tr>
        </thead>
        <tbody>
          {allLogList}
        </tbody>
      </Table>
    );
  }
}

export default ClockLog;
