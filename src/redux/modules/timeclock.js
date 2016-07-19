const START_CLOCK = 'redux-example/timeclock/START_CLOCK';
const STOP_CLOCK = 'redux-example/timeclock/STOP_CLOCK';


const INITIAL_STATE = {
  clockState: 'NOT_RUNNING'
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
        clockState: 'NOT_RUNNING'
      };
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
