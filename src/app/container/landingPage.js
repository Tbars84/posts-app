import React, { Component } from 'react'
import axios from 'axios';

// IMPPORTAR COMPONENTES DE LA LANDING
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import Search from '../components/blogContent/searchForm/search'
import BloggerInfo from '../components/blogContent/bloggerSnippet'
import BlogList from '../components/blogContent/blogList'

export class LandingPage extends Component {
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
        

    render() {
        return (
            <div>
                <ContInfo _title='Blog msco.' 
                _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
                <Search  search={this.search}/>
                <BloggerInfo key={this.state.userOwner.id} description={this.state.userOwner.type} userLogin={this.state.userOwner.login} avatarUrl={this.state.userOwner.avatar_url} />
                {
                    this.state.postList && this.state.postList.map((post)=> {return (
                            <BlogList key={post.id} _postName={post.full_name}  _postUrl={post.html_url} _posDate={post.created_at}/>
                        )}
                    )
                }            
            </div>
        )
    }
}

export default LandingPage
