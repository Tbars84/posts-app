import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg';
import './header.css'


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
    console.log(this.state.verifSession)
    return (
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        { this.state.verifSession ? 
          (
            <div className="user-card" >
              <div className="user--img">
                  <img alt={this.state.verifSession.name} src={this.state.verifSession.avatar} />
              </div>
              <div className="user--info">
                  <h3>{this.state.verifSession.name}</h3>
                  <button>Log Out</button>
              </div>
            </div> 
          ):(
            <Link to="/login" className="singIn">
              <p>Sign in ...</p>
            </Link>
          )
        }
      </header>    
    )
  }
}

export default Header
