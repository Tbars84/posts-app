import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import ContInfo from '../components/containerInfo/contInfo'
import OwnerPosts from '../components/posts/ownerPosts'
import {AUTH_VERIF} from '../config/config'

// INICIALIZO FIREBASE
firebase.initializeApp(AUTH_VERIF)

export class LoginSesion extends Component {
  constructor(props){
    super()
    this.state = { 
      isSignedIn: false,
      idToken :'',
      userLogin: {}
    }
    this.uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false
      }
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ 
        isSignedIn: !!user , 
        userLogin: {
          'name' : user.displayName,
          'email' : user.email,
          'avatar' : user.photoURL,
          'lastLogin' : Date.now(),
        } 
      })
      user.getIdToken().then(idTk => 
        this.setState({ idToken  : idTk })
      ) 

    })
  }
  componentDidUpdate(){
    localStorage.setItem('userSession' , JSON.stringify(this.state.userLogin))
  }
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <ContInfo />
            <OwnerPosts key={this.state.idToken} description={firebase.auth().currentUser.email} userLogin={firebase.auth().currentUser.displayName} avatarUrl={firebase.auth().currentUser.photoURL} />
            {

            }
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default LoginSesion
