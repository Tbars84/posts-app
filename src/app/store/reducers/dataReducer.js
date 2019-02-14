
const dataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_GISTS':
      return action.posts;
    case 'DATA_ERROR':
      console.log('error data')
      return state
    default:
      console.log('empty data')
      return state;
  }
};

export default dataReducer;