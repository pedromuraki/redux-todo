import { combineReducers } from 'redux';

/* Reducers */
import counters from './counters';

export const combinedReducers = combineReducers({
  counters
});

export default combinedReducers;
