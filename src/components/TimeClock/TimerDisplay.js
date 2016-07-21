import React, {Component, PropTypes} from 'react';

class TimerDisplay extends Component {
  static propTypes = {
    clockLog: PropTypes.array.isRequired,
    clockState: PropTypes.object.isRequired
  };
  constructor() {
    super();
    this.millisecondsToHuman = this.millisecondsToHuman.bind(this);
    this.pad = this.pad.bind(this);
    this.renderElapsedString = this.renderElapsedString.bind(this);
  }
  forceUpdateInterval() {
    setInterval(() => this.forceUpdate(), 50);
  }

  pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = '0' + padded;
    return padded;
  }

  millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      this.pad(hours.toString(), 2),
      this.pad(minutes.toString(), 2),
      this.pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return this.millisecondsToHuman(totalElapsed);
  }

  render() {
    // const startTime = this.props.clockLog.find
    //
    // const elapsedString = this.renderElapsedString(
    //
    // )
    return (
       <div>
          <h4>Time Now: </h4>
       </div>
    );
  }
}

export default TimerDisplay;
