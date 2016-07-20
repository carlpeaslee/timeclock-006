import React from 'react';
import {Row, Col} from 'react-bootstrap';


import {TimerDisplay, CtrlButtons, ProjectSelector, TaskSelector} from '../TimeClock';


const TCDash = ({startClock, stopClock, pauseClock, clockState, allProjects, createProject, activateProject}) => (
  <Row>
    <Col md={3}>
      <TimerDisplay/>
    </Col>
    <Col md={3}>
      <CtrlButtons
          startClock={startClock}
          stopClock={stopClock}
          clockState={clockState}
          pauseClock={pauseClock}
      />
    </Col>
    <Col md={3}>
      <ProjectSelector
        allProjects={allProjects}
        createProject={createProject}
        activateProject={activateProject}
      />
    </Col>
    <Col md={3}>
      <TaskSelector/>
    </Col>
  </Row>
);

export default TCDash;
