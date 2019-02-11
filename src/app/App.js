import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import axios from 'axios';

// IMPPORTAR COMPONENTES DE LA LANDING
import Header from './components/header/header'
import LandingPage from './container/landingPage'
import UserSession from './container/userSession'
import bg from './assets/background.svg';
// ESTILOS GLOBALES
import './App.css'

class App extends Component {
  constructor(props){
    super()
    // SE CREA ESTADOS PARA ASIGNAR LOS VALORES QUE SE MAPEAN EN EL MOMENTO DE USAR EL BUSCADOR
    this.state = {
      // USUARIO QUE SE BUSCA
      userOwner : {},
      // LISTA DE REPOSITORIOS QUE EMULAN LISTA DE POSTS
      postList : [],
    }
  }
  search = (name) => {
    axios.get(`https://api.github.com/users/${name}/repos?page=1&per_page=30`)
     .then((response) => {
       this.setState({
          userOwner: response.data[0].owner,
          postList: response.data
        })
     })
    .catch((error)=>{
       console.log(error);
    });
  }
  render(props) {
    return (
      <div className="App">
        <Header />
        <div className="container">  
            <Router>
              <div className="container--info">
                <Route exact path="/" component={LandingPage} />
                <Route path="/user" component={UserSession} />
              </div>
            </Router>
            <div className="container--img">
                <img src={bg} alt="Background Posts" />
            </div>
        </div>
      </div>
    )
  }
}

export default App
