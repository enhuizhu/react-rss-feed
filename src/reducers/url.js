import events from '../constants/events';

const defaultState = [];

const urls = (state = defaultState, action = {}) => {
  switch (action.type) {
    case events.ADD_URL:
      return state.concat(action.payload);

    case events.DELETE_URL:
      let cloneState = Object.assign([], state);
      cloneState.splice(action.payload, 1);
      return cloneState;
    default:
      return state;
  }
};

export default urls;