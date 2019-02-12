
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';
const SignedOutLinks = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>    
      <Link to="/dashboard" className="singIn">
          <p>Signed in ...</p>
      </Link>
    </header>
  )
}

export default SignedOutLinks