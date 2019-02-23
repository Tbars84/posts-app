


export const signIn = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();    
    firebase.auth()
    // GIT PROVIDER SIGNUP
    const providerGith = new firebase.auth.GithubAuthProvider();
    providerGith.addScope('gist');
    firebase.auth().signInWithPopup(providerGith)
    .then(function(result) {
      localStorage.setItem('uidToken', result.credential.accessToken);
      localStorage.setItem('userRegistered', JSON.stringify(result.user));
      const payload = {
        userToken : result.credential.accessToken,
        userRegister : JSON.stringify(result.user)
      }
      dispatch({ type : 'LOGIN_SUCCESS' , payload})

    }).catch(function(error) {
      dispatch({ type : 'LOGIN_ERROR' , error})
    });
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
} 