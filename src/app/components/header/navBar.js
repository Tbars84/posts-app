import React, { Component } from 'react'
import SignedInLinks from './signedIn'
import SignedOutLinks from './singneOut'
import './navBarSt.css'


export class Header extends Component {
  constructor(props){
    super()
    this.state = {
      verifSession : {}
    }
  }
  componentWillMount(){
    localStorage.getItem('userSession') && this.setState({
      verifSession : JSON.parse(localStorage.getItem('userSession'))
    })
  }
  render() {
    return (
      this.state.verifSession ? 
        (
          <SignedInLinks 
            nameUser={this.state.verifSession.name} 
            avatar={this.state.verifSession.avatar} 
          />
        ):(
          <SignedOutLinks />
        )
    )
  }
}

export default Header
