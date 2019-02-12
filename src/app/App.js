import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'

// IMPPORTAR COMPONENTES DE LA LANDING
import Header from './components/header/header'
import LandingPage from './container/landingPage'
import LoginSesion from './container/login'
import bg from './assets/background.svg';
// ESTILOS GLOBALES
import './App.css'

class App extends Component {
  render(props) {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">  
                <div className="container--info">
                  <Route exact path="/" component={LandingPage} />
                  <Route path="/login" component={LoginSesion} />
                </div>
              <div className="container--img">
                  <img src={bg} alt="Background Posts" />
              </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
