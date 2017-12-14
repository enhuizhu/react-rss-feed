import events from '../constants/events';

export const getFeed = (data) => ({
  type: events.GET_FEED,
  payload: data,
});

export const reciveFeed = (data) => ({
  type: events.RECIEVE_FEED,
  payload: data,
});