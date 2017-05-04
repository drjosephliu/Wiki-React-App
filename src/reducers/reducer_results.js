import { FETCH_RESULTS } from '../actions/index';

const INITIAL_STATE = { term: null, title: [], description: [], url: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_RESULTS:
    console.log('Request received:', action.payload);
    return {
      term: action.payload[0],
      title: action.payload[1],
      description: action.payload[2],
      url: action.payload[3]
    }
  }
  return state;
}
