const initState = {
  authERROR: null, 
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {...state ,  authERROR: 'Login Failed'}
    case 'LOGIN_PENDING':
      console.log(action)
      return {...state ,  authERROR: 'pending'}
    case 'LOGIN_SUCCESS':
      console.log(action)
      return {...state ,  authERROR: null}
    case 'SIGNOUT_SUCCESS':
      return state
    default:
      return state;
  }
};

export default authReducer;