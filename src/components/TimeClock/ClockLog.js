import React, {Component, PropTypes} from 'react';


class ClockLog extends Component {
  static propTypes = {
    clockLog: PropTypes.array.isRequired
  };
  render() {
    return (
      <div>
          <h2>This is a clockLog</h2>
      </div>
    );
  }
}

export default ClockLog;
