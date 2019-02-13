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
    providerGith.addScope('repo');
    firebase.auth().signInWithPopup(providerGith).then(function(result) {
      // var token = result.credential.accessToken;
      // var user = result.user;
      dispatch({ type : 'LOGIN_SUCCESS'})
    }).catch(function(error) {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // var email = error.email;
      // var credential = error.credential;

      dispatch({ type : 'LOGIN_ERROR' , error})

      // if (errorCode === 'auth/account-exists-with-different-credential') {
      //     alert('You have signed up with a different provider for that email.');
      //   } else {
      //     console.error(error);
      //   }
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