import React, { Component } from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'

// IMPPORTAR COMPONENTES DE LA LANDING
import NavBar from './components/header/navBar'
import LandingPage from './container/landingPage'
import DashBoard from './container/dashboard'
import BlogDetail from './components/blogContent/blogDetail/blogDetail'
import bg from './assets/background.svg';
// ESTILOS GLOBALES
import './App.css'

class App extends Component {
  render(props) {
    return (
      <Router>
        <Switch>
          <div className="App">
            <NavBar />
            <div className="container">  
                <div className="container--info">
                  <Route exact path="/"  component={LandingPage} />
                  <Route path="/dashBoard" component={DashBoard} />
                  <Route path="/blog/:id" component={BlogDetail} />
                </div>
                <div className="container--img">
                    <img src={bg} alt="Background Posts" />
                </div>
            </div>
          </div>
        </Switch>
      </Router>
    )
  }
}

export default App
