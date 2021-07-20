// TODO: add and export your own actions
export const FETCH_POST = 'FETCH_POST';

export function fetchPost() {
  const promise = 'reduxblog.herokuapp.com/api/posts?key=laicuroot'
    .then(response => response.json());
  return {
    type: FETCH_POST,
    payload: promise
  };
}
