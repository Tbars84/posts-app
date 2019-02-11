import React, { Component } from 'react'
import axios from 'axios';

// IMPPORTAR COMPONENTES DE LA LANDING
import Header from '../components/header/header'
import ContInfo from '../components/containerInfo/contInfo'
import Search from '../components/searchForm/search'
import OwnerPosts from '../components/posts/ownerPosts'
import PostItems from '../components/posts/postItems'
import bg from '../assets/background.svg';
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
  // EVENTO DE BUSCADOR, EL FILTRO SE REALIZA POR NOMBRE DE USUARIO DE GITHUB
  search = (name) =>{
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
            <div className='container--info'>
                <ContInfo />
                <Search  search={this.search}/>
                <OwnerPosts key={this.state.userOwner.id} description={this.state.userOwner.type} userLogin={this.state.userOwner.login} avatarUrl={this.state.userOwner.avatar_url} />
                {
                  this.state.postList.map((post)=> {return (
                        <PostItems key={post.id} postName={post.full_name}  postUrl={post.html_url} posDate={post.created_at}/>
                      )}
                  )
                }
            </div>
            <div className="container--img">
                <img src={bg} alt="Background Posts" />
            </div>
        </div>
      </div>
    )
  }
}

export default App
