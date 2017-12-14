import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers/';
import DataService from '../middlewares/DataService';

const store = createStore(allReducers, applyMiddleware(DataService));

export default store;