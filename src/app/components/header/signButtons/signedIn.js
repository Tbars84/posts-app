import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/logo.svg';
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/actions'

class SignedInLinks extends Component {
  render(props) {
    return (
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>    
        <div className="user-card nav-bar" >
              <div className="user--img">
                  {/* <img alt={this.props.nameUser} src={this.props.avatar} /> */}
              </div>
              <div className="user--info">
                  {/* <h3>{this.props.nameUser}</h3> */}
                  <button onClick={this.props.signOut} >Log Out</button>
              </div>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)
