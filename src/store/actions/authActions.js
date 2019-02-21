import * as actionTypes from './types/actionTypes';
import firebase from '../fbConfig'
// CALLBACK FROM INCREMENT
export const successLoging = (usrData) =>{
    return{
        type: actionTypes.LOG_SUCCESS,
        user: usrData
    }
}
export const logPending = () => {
    return (dispatch) =>{
        // FIREBASE SETUP FOR LOGIN WITH GITHUB 
        firebase.auth()
        const providerGith = new firebase.auth.GithubAuthProvider();
        providerGith.addScope('gist');
        firebase.auth().signInWithPopup(providerGith)
        .then(function(result) {
            const usrData = {
                name: result.user.displayName,
                uidToken: result.credential.accessToken,
                email: result.user.email,
                urlPhoto: result.user.photoURL
            }
            dispatch(successLoging(usrData))

        })
        .catch(function(error) {
          dispatch({ type : actionTypes.LOG_FAILED , err: error})
        });
    } 
}

export const signOut = () => {
    return (dispatch) => {
      firebase.auth().signOut()
      .then(() => {
        dispatch({ type: actionTypes.LOG_OUT , user: {} })
      });
    }
  } 
