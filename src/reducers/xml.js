import events from '../constants/events';

const defaultState = '';

const xml = (state = defaultState, action = {}) => {
  switch (action.type) {
    case events.RECIEVE_FEED:
      return action.payload;

    default:
      return state;
  }
};

export default xml;