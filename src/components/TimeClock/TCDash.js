import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {TimerDisplay, CtrlButtons, ProjectSelector, TaskSelector} from '../TimeClock';

const TCDash = ({startClock, stopClock, pauseClock, unpauseClock, clockState, allProjects, createProject, toggleProject, clockLog}) => (
  <Row>
    <Col md={3}>
      <TimerDisplay
        clockLog={clockLog}
      />
    </Col>
    <Col md={3}>
      <CtrlButtons
          startClock={startClock}
          stopClock={stopClock}
          clockState={clockState}
          pauseClock={pauseClock}
          unpauseClock={unpauseClock}
      />
    </Col>
    <Col md={3}>
      <ProjectSelector
        allProjects={allProjects}
        createProject={createProject}
        toggleProject={toggleProject}
      />
    </Col>
    <Col md={3}>
      <TaskSelector/>
    </Col>
  </Row>
);

export default TCDash;
