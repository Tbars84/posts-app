import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/actions'

class SignedOutLinks extends Component {
  render(props) {
    return (
      <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>    
      <button className="singIn" onClick={this.props.signIn} >
          <p>Log in ...</p>
      </button>
    </header>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  }
}

export default connect(null,mapDispatchToProps)(SignedOutLinks)