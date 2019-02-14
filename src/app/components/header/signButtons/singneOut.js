import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg';

class SignedOutLinks extends Component {
  render(props) {
    return (
      <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <button className="singIn" onClick={this.props.btnLogIn} >
          <p>Log in ...</p>
      </button>
    </header>
    )
  }
}


export default SignedOutLinks