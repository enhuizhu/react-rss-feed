'use strict';

import events from '../constants/events';
import ApiService from '../services/ApiService';
import {getFeed,reciveFeed} from '../actions/';

const DataService = (store) => (next) => (action) => {
  /*
  * Pass all actions through by default
  */
  next(action);

  switch (action.type) {
    case events.GET_FEED:
      ApiService.getFeed(action.payload).then(response => {
        console.log('response', response);
      });
  };
};

export default DataService;