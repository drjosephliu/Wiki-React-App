import axios from 'axios';

export const FETCH_RESULTS = 'FETCH_RESULTS';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';

export function fetchResults(term) {
  const url = `${ROOT_URL}${term}`;

  const request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      console.log('Request:', data);
      dispatch({
        type: FETCH_RESULTS,
        payload: data
      });
    });
  };

}
