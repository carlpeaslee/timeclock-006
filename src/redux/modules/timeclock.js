import uuid from 'uuid';

const START_CLOCK = 'redux-example/timeclock/START_CLOCK';
const STOP_CLOCK = 'redux-example/timeclock/STOP_CLOCK';
const PAUSE_CLOCK = 'redux-example/timeclock/PAUSE_CLOCK';
const UNPAUSE_CLOCK = 'redux-example/timeclock/UNPAUSE_CLOCK';

const NEW_PROJECT = 'redux-example/timeclock/NEW_PROJECT';
const TOGGLE_PROJECT = 'redux-example/timeclock/TOGGLE_PROJECT';


const INITIAL_STATE = {
  clockState: {
    running: 'STOPPED',
    timerSessionId: null
  },
  allProjects: [],
  clockLog: []
};

export function projectReducer(projectState = [], action = {}) {
  switch (action.type) {
    case NEW_PROJECT: {
      const newAllProjectsState = projectState.concat(action.newProject);
      return newAllProjectsState;
    }
    case TOGGLE_PROJECT: {
      const index = projectState.findIndex(
        (project) => project.projectId === action.projectId
      );
      const oldProject = projectState[index];
      const newProject = {
        ...oldProject,
        active: !oldProject.active
      };
      const newAllProjectsState = [
        ...projectState.slice(0, index),
        newProject,
        ...projectState.slice(index + 1, projectState.length)
      ];
      return newAllProjectsState;
    }
    default:
      return projectState;
  }
}

export function clockLogReducer(state = {}, action = {}) {
  switch (action.type) {
    case START_CLOCK:
    case STOP_CLOCK:
    case PAUSE_CLOCK:
    case UNPAUSE_CLOCK:
    case TOGGLE_PROJECT:
    case NEW_PROJECT:
      const activeProjects = [];
      state.allProjects.forEach(
        (project) => {
          if (project.active === true) {
            activeProjects.push(project);
          }
        }
      );
      const newClockLogEntry = {
        timerSessionId: action.timerSessionId,
        timeStamp: Date.now(),
        action: action.type,
        activeProjects: activeProjects,
        logId: uuid.v4()
      };
      return state.clockLog.concat(newClockLogEntry);
    default:
      return state;
  }
}

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case START_CLOCK: {
      const newClockState = {
        running: 'RUNNING',
        timerSessionId: action.timerSessionId
      };
      return {
        ...state,
        clockState: newClockState,
        clockLog: clockLogReducer(state, action)
      };
    }
    case STOP_CLOCK: {
      action.timerSessionId = state.clockState.timerSessionId;
      const newClockState = {
        running: 'STOPPED',
        timerSessionId: null
      };
      return {
        ...state,
        clockState: newClockState,
        clockLog: clockLogReducer(state, action)
      };
    }
    case PAUSE_CLOCK: {
      action.timerSessionId = state.clockState.timerSessionId;
      const newClockState = {
        running: 'PAUSED',
        timerSessionId: action.timerSessionId
      };
      return {
        ...state,
        clockState: newClockState,
        clockLog: clockLogReducer(state, action)
      };
    }
    case UNPAUSE_CLOCK: {
      action.timerSessionId = state.clockState.timerSessionId;
      const newClockState = {
        running: 'RUNNING',
        timerSessionId: action.timerSessionId
      };
      return {
        ...state,
        clockState: newClockState,
        clockLog: clockLogReducer(state, action)
      };
    }
    case NEW_PROJECT: {
      const newAllProjects = projectReducer(state.allProjects, action);
      return {
        ...state,
        allProjects: newAllProjects,
        clockLog: clockLogReducer({
          ...state,
          allProjects: newAllProjects
        }, action)
      };
    }
    case TOGGLE_PROJECT: {
      action.timerSessionId = state.clockState.timerSessionId;
      const newAllProjects = projectReducer(state.allProjects, action);
      return {
        ...state,
        allProjects: newAllProjects,
        clockLog: clockLogReducer({
          ...state,
          allProjects: newAllProjects
        }, action)
      };
    }
    default:
      return state;
  }
}

export function startClock() {
  return {
    type: START_CLOCK,
    timerSessionId: uuid.v4()
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

export function unpauseClock() {
  return {
    type: UNPAUSE_CLOCK
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

export function toggleProject(data) {
  return {
    type: TOGGLE_PROJECT,
    projectId: data.projectId
  };
}
