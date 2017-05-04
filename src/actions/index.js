import axios from 'axios';

export const FETCH_RESULTS = 'FETCH_RESULTS';

const ROOT_URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=';

export function fetchResults(term) {
  const url = `${ROOT_URL}${term}`;

  const request = axios.get(url);

  return (dispatch) => {
    request.then((response) => {
      console.log('Request:', data);
    });
  };
}
