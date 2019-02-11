import React, { Component } from 'react'
import logo from '../../assets/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="singIn">
          <p>Sign in ...</p>
        </div>
      </header>
    )
  }
}

export default Header
