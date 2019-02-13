export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();    
    firebase.auth()
    // *****************************
    // EMAIL AND PASS PROVIDER
    // const providerMail = new firebase.auth.signInWithEmailAndPassword(
    //   credentials.email,
    //   credentials.password
    // ).then(() => {
    //   dispatch({ type: 'LOGIN_SUCCESS' });
    // }).catch((err) => {
    //   dispatch({ type: 'LOGIN_ERROR', err });
    // })
    // *****************************

    // GIT PROVIDER SIGNUP
    const providerGith = new firebase.auth.GithubAuthProvider();
    providerGith.addScope('gist');
    firebase.auth().signInWithPopup(providerGith).then(function(result) {
      localStorage.setItem('uidToken', result.credential.accessToken);
      localStorage.setItem('userRegistered', JSON.stringify(result.user));
      dispatch({ type : 'LOGIN_SUCCESS' })
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