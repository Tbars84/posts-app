import React, { Component } from 'react'
import axios from 'axios';
import './App.css'
import Header from './components/header/header'
import Search from './components/searchForm/search'
import OwnerPosts from './components/posts/ownerPosts'
import PostItems from './components/posts/postItems'
import bg from '../assets/background.svg';

class App extends Component {
  state = {
    userOwner : '',
    postList : []
  }
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //     .then(res => this.setState({ postList: res.data }))
  // }
  // VARIABLE CON FUNCION DE FILTRO
  filterApi = (event) => {
    alert("me and all my relatives are owned by China");
    event.preventDefault();
  };
  search = (name) =>{
    axios.get(`https://api.github.com/users/${name}/repos?page=1&per_page=30`)
     .then((response) => {
       this.setState({
          userOwner: response.data[0].owner,
          postList: response.data
        })
       console.log(this.state.postList.id)
     })
    .catch((error)=>{
       console.log(error);
    });
  }
  render() {
    console.log(this.state.postList)
    return (
      <div className="App">
        <Header />
        <div className="container">
            <div className='container--info'>
                <h1>Blog msco.</h1>
                <p className="subtitle">
                  Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.
                </p>
                <Search  search={this.search}/>
                <OwnerPosts key={this.state.userOwner.id} userData={this.state.userOwner} />
                <PostItems key={this.state.postList.id} postList={this.state.postList}/>
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
