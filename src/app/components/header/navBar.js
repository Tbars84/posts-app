import React, { Component } from 'react'
import SignedInLinks from './signButtons/signedIn'
import SignedOutLinks from './signButtons/singneOut'
import { connect } from 'react-redux'
import { signIn , signOut } from '../../store/actions/actions'
import './navBarSt.css'


export class Header extends Component {
  
  constructor(props){
    super()
    this.state = {
      verifLog : false
    }
  }
  loggIn= () => {
    this.setState({ verifLog: !this.state.verifLog})
    this.props.signIn()
  }
  loggOut = () => {
    this.setState({ verifLog: !this.state.verifLog})
    this.props.signOut()
  }

  render() {
    return (
      this.state.verifLog ? 
        (
          <SignedInLinks
            btnLogOut={this.loggOut}
            // nameUser={this.state.verifSession.name}
            // avatar={this.state.verifSession.avatar}
          />
        ):(
          <SignedOutLinks btnLogIn={this.loggIn} />
        )
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signOut: () => dispatch(signOut())
  }
}


export default connect(mapStateToProps , mapDispatchToProps)(Header)
