import axios from 'axios'

export const fetchGist = (posts) => {
    return {
      type: 'FETCH_GISTS',
      posts
    }
  };
  
export const fetchAllGists = () => {
    return (dispatch) => {
      return axios.get("https://api.github.com/users/Tbars84/gists")
        .then(response => {
          dispatch(fetchGist(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };