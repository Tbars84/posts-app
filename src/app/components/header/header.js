import React, { Component } from 'react'
// CONEXION A FIREBASE
import firebase from 'firebase'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { AUTH_VERIF } from '../../config/config'
import logo from '../../assets/logo.svg';
import './header.css'
firebase.initializeApp(AUTH_VERIF)

export class Header extends Component {
  constructor(props){
    super()
    // ESTADO DE CONEXION
    this.signedVerif = false
    this.state = { isSignedIn: false }
    // INICIA MAGIA DE FIREBASE
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
  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })    
  }
  render() {
    return (
      <header>
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="singIn">
        {this.state.isSignedIn ? (
            <div className="loggedIn">
                <p>Signed In as {firebase.auth().currentUser.displayName}</p>
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            </div>
          ) : (
            <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </header>
    )
  }
}

export default Header
