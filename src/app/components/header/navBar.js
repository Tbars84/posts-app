import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './signButtons/signedIn'
import SignedOutLinks from './signButtons/singneOut'
import { signIn , signOut } from '../../store/actions/actions'
import './navBarSt.css'

export class NavBar extends Component {
  constructor(){
    super()
  }
  loggIn = () => {
    // const log = () => this.props.signPending;
    console.log('this.props')
  }
  loggOut = () => {
    this.props.signOut()
  }
  render() {  
    const { auth } = this.props
    console.log(auth )
    if (!auth.uid) return <SignedInLinks nameUser={auth.displayName} avatarUser={auth.photoURL} btnLogOut={this.loggOut} />
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
    signPending: () => dispatch({type: 'LOGIN_PENDING'}),
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps , mapDispatchToProps)(NavBar)
