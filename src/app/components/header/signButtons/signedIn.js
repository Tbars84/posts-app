import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg';

class SignedInLinks extends Component {
  render(props) {
    return (
      <header>
        <Link to="/dashBoard" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="user-card nav-bar" >
              <div className="user--img">
                  <img alt={this.props.nameUser} src={this.props.avatarUser} />
              </div>
              <div className="user--info">
                  <h3>{this.props.nameUser}</h3>
                  <button onClick={this.props.btnLogOut} >Log Out</button>
              </div>
        </div>
      </header>
    )
  }
}

export default SignedInLinks
