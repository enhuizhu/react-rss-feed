import events from '../constants/events';
import ApiService from '../services/ApiService';
import { parseString } from 'xml2js';
import { reciveFeed } from '../actions/';

const DataService = (store) => (next) => (action) => {
  /*
  * Pass all actions through by default
  */
  next(action);

  switch (action.type) {
    case events.GET_FEED:
      ApiService.getFeed(action.payload).then(response => {
        parseString(response.data, (err, result) => {
          if (err) {
            console.error(err);
            return ;
          }

          store.dispatch(reciveFeed(result));
        });        
      });

      break;
    default: 
     return ;
  };
};

export default DataService;