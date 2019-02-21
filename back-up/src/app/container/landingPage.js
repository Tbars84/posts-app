import React, { Component } from 'react'
import axios from 'axios';

// IMPPORTAR COMPONENTES DE LA LANDING
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import Search from '../components/blogContent/searchForm/search'
import BloggerInfo from '../components/blogContent/bloggerSnippet'
import BlogList from '../components/blogContent/blogList'
import loader from '../assets/three-dots.svg'
export class LandingPage extends Component {
    constructor(props){
        super()
        this.state = {
          userOwner : {},
          loaderPost: false,
          postList : [],
        }
    }
    search = (name) => {
        axios.get(`https://api.github.com/users/${name}/repos?page=1&per_page=30`)
            .then(response => {
                this.setState({loaderPost: true})
                return response.data
            })
            .then(data =>{
                this.setState({
                    userOwner: data[0].owner,
                    loaderPost: false,
                    postList: data
                })
            })
        .catch((error)=>{
            console.log(error);
        });
    }
    proccesStyle = () =>{
        return{
            display: this.state.loaderPost ? 'block' : 'none'
        }
    }
    render() {
        return (
            <div>
                <ContInfo _title='Blog msco.' 
                _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
                <Search  search={this.search}/>
                 <div className="loader" style={this.proccesStyle()} ><img src={loader} alt="loader" /></div>
                <BloggerInfo key={this.state.userOwner.id} description={this.state.userOwner.type} userLogin={this.state.userOwner.login} avatarUrl={this.state.userOwner.avatar_url} />
                {
                    this.state.postList && this.state.postList.map((post)=> {return (
                            <BlogList key={post.id} _type={'repo'} _postName={post.full_name}  _postUrl={post.html_url} _posDate={post.created_at}/>
                        )}
                    )
                }        
            </div>
        )
    }
}

export default LandingPage
