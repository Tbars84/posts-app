import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import BloggerInfo from '../components/blogContent/bloggerSnippet'
import {AUTH_VERIF} from '../config/config'

// INICIALIZO FIREBASE
firebase.initializeApp(AUTH_VERIF)

export class DashBoard extends Component {
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
  // CARGAR Y VALIDAR DATA PARA LOGUEO
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
  // INSERTAR USERLOGIN EN LOCALSTORAGE
  componentDidUpdate(){
    localStorage.setItem('userSession' , JSON.stringify(this.state.userLogin))
  }
  render() {
    return (
      <div>
        {this.state.isSignedIn ? (
          <span>
            <ContInfo _title='Blog msco.' 
            _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
            <BloggerInfo key={this.state.idToken} description={firebase.auth().currentUser.email} userLogin={firebase.auth().currentUser.displayName} avatarUrl={firebase.auth().currentUser.photoURL} />
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

export default DashBoard
