import uuid from 'uuid';

const START_CLOCK = 'redux-example/timeclock/START_CLOCK';
const STOP_CLOCK = 'redux-example/timeclock/STOP_CLOCK';
const PAUSE_CLOCK = 'redux-example/timeclock/PAUSE_CLOCK';

const NEW_PROJECT = 'redux-example/timeclock/NEW_PROJECT';

const INITIAL_STATE = {
  clockState: 'STOPPED',
  allProjects: [],
  currentProjects: []
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case START_CLOCK:
      return {
        ...state,
        clockState: 'RUNNING'
      };
    case STOP_CLOCK:
      return {
        ...state,
        clockState: 'STOPPED'
      };
    case PAUSE_CLOCK:
      return {
        ...state,
        clockState: 'PAUSED'
      };
    case NEW_PROJECT: {
      return {
        ...state,
        allProjects: state.allProjects.concat(action.newProject)
      };
    }
    default:
      return state;
  }
}

export function startClock() {
  return {
    type: START_CLOCK
  };
}


export function stopClock() {
  return {
    type: STOP_CLOCK
  };
}

export function pauseClock() {
  return {
    type: PAUSE_CLOCK
  };
}

export function createProject(data) {
  const newId = uuid.v4();
  const newProject = {
    projectName: data.projectName,
    projectId: newId,
    active: false
  };
  return {
    type: NEW_PROJECT,
    newProject: newProject
  };
}
