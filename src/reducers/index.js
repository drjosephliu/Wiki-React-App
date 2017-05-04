import { combineReducers } from 'redux';
import ResultsReducer from './reducer_results';
import ErrorReducer from './reducer_error';

const rootReducer = combineReducers({
  results: ResultsReducer,
  error: ErrorReducer
});

export default rootReducer;
