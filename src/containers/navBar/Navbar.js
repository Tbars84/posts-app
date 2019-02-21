import React, { Component } from 'react'
import './navbar.css';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as createActions from '../../store/actions/authActions'
import SingIn from '../../components/navBar/SignIng'
import SingOut from '../../components/navBar/SignOut'
import logo from '../../assets/logo.svg';

export class Navbar extends Component {
  render() {
    const { _logProccess , _userData , stateProgress , logOut } = this.props
    return (
        <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        {!_logProccess ? (
          <SingIn text='Login ...' clicked={stateProgress} />
        ) : (
          <SingOut nameUser={_userData.name} clicked={logOut} avatarUser={_userData.urlPhoto} />
        )}
      </header>
    )
  }
}
const mapStateToprops = state => {
  return {
      _logProccess: state.auth.logProccess,
      _userData: state.auth.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    stateProgress: () =>dispatch(createActions.logPending()),
    logOut:     () => dispatch({ type: 'LOG_OUT' })
  }
}

export default connect(mapStateToprops , mapDispatchToProps)(Navbar)