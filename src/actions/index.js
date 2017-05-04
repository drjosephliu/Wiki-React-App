import axios from 'axios';

export const FETCH_RESULTS = 'FETCH_RESULTS';
export const HAS_ERRORED = 'HAS_ERRORED';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

export function fetchResults(term) {
  const url = `${ROOT_URL}${term}`;

  const request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      console.log('Request:', data);
      if (data[1].length > 0) {
        dispatch({
          type: FETCH_RESULTS,
          payload: data
        });
        dispatch(hasErrored(false));
      }
      else {
        dispatch(hasErrored(true));
      }
    });
  };
}

export function hasErrored(bool) {
  return {
    type: HAS_ERRORED,
    bool: bool
  }
}
