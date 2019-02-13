import React, { Component } from 'react'
import SignedInLinks from './signButtons/signedIn'
import SignedOutLinks from './signButtons/singneOut'
import { connect } from 'react-redux'
import './navBarSt.css'


export class NavBar extends Component {
  render() {
    const { auth } = this.props;
    console.log(auth)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return links
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps , null)(NavBar)
