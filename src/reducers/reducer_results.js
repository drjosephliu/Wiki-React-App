import { FETCH_RESULTS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_RESULTS:
    console.log('Request received');
    return [action.payload, ...state];
  }
  return state;
}
