import events from '../constants/events';

export const addUrl = (data) => ({
  type: events.ADD_URL,
  payload: data,
});

export const deleteUrl = (data) => ({
  type: events.DELETE_URL,
  payload: data,
});