import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('https://reqres.in/api/users');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'FETCH_PROFILES', payload: data.data})
    });
  };
}
