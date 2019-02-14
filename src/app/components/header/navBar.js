import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './signButtons/signedIn'
import SignedOutLinks from './signButtons/singneOut'
import { signIn , signOut } from '../../store/actions/actions'
import './navBarSt.css'


export class NavBar extends Component {

  loggIn = () => {
    this.props.signIn()
  }
  loggOut = () => {
    this.props.signOut()
  }
  render(props) {  
    const { auth  } = this.props
    if (!auth.uid) return <SignedOutLinks btnLogIn={this.loggIn } />
    if (auth.uid) return <SignedInLinks nameUser={auth.displayName} avatarUser={auth.photoURL} btnLogOut={this.loggOut} /> 
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(NavBar)
