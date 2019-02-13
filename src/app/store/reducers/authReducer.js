const initState = {
  authERROR: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {...state ,  authERROR: 'Login Failed'}
    break;
    case 'LOGIN_SUCCESS':
      return {...state ,  authERROR: null}
    break;
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    break;
    default:
    break;
  }
  return state;
};

export default authReducer;