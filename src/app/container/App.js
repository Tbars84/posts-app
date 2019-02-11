import React, { Component } from 'react'
import axios from 'axios';

// IMPPORTAR COMPONENTES DE LA LANDING
import Header from '../components/header/header'
import Search from '../components/searchForm/search'
import OwnerPosts from '../components/posts/ownerPosts'
import PostItems from '../components/posts/postItems'
import bg from '../assets/background.svg';

import './App.css'

class App extends Component {
  constructor(props){
    super()
    // SE CREA ESTADOS PARA ASIGNAR LOS VALORES QUE SE MAPEAN EN EL MOMENTO DE USAR EL BUSCADOR
    this.state = {
      userOwner : {},
      postList : []
    }
    this.infoLanding = {
      title: 'Blog msco.',
      body: 'Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.'
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
        console.log(this.state.userOwner)
     })
    .catch((error)=>{
       console.log(error);
    });
  }
  render(props) {
    console.log(typeof this.state.userOwner.avatar_url)
    return (
      <div className="App">
        <Header />
        <div className="container">
            <div className='container--info'>
                <h1>{this.infoLanding.title}</h1>
                <p className="subtitle">{this.infoLanding.body}</p>
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
