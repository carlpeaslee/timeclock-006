import React from 'react';

import {TimerDisplay, CtrlButtons, ProjectSelector, TaskSelector} from '../TimeClock';


const TCDash = ({startClock, stopClock, clockState}) => (
    <div>
        <TimerDisplay/>
        <CtrlButtons
            startClock={startClock}
            stopClock={stopClock}
            clockState={clockState}
        />
        <ProjectSelector/>
        <TaskSelector/>
    </div>
);

export default TCDash;
