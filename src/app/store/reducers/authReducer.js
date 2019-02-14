const initState = {
  authERROR: null, 
  userInfo: []
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {...state ,  authERROR: 'Login Failed'}
    case 'LOGIN_SUCCESS':
      return state = {  ...state ,  
                        authERROR: null,
                        userInfo : action.payload
                      }
    case 'SIGNOUT_SUCCESS':
      return state
    default:
      return state;
  }
};

export default authReducer;