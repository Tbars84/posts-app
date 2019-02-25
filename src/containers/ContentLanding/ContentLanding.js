import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import './landing.css';
import bg from '../../assets/background.svg';
import CockpitInfo from '../../components/Landing/Cockpit/CockpitInfo'
import SearchBtn from '../../components/Landing/Search/SearchBtn'
import UserSnippet from '../../components/Landing/UserSnippet/UserSnippet'
import BlogList from '../../components/Landing/Blog/BlogList'
import loader from '../../assets/three-dots.svg'

export class ContentLanding extends Component {
    constructor(props){
        super()
        this.state = {
          userOwner : {},
          loaderPost: false,
          postList : [],
        }
    }
    gitSrv = (name , type = 'repos') => {
        axios.get(`https://api.github.com/users/${name}/${type}?page=1&per_page=30`)
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
        const { _logProccess , _userData } = this.props
        return (
            <div className="container">
                {
                _logProccess ? (
                    <div className="container--info">
                        <CockpitInfo title={'Welcome.'} info={`${_userData.name} here we offer you the ability to take a quick pick of your github gist, go ahead and edit it` } />
                        <UserSnippet key={_userData.uidToken} description={_userData.email} userLogin={_userData.name} avatarUrl={_userData.urlPhoto} />
                        <button className="loadGist" onClick={() => this.gitSrv(_userData.name , 'gists')}>Load Gist of {_userData.name}</button>
                        {
                            this.state.postList && this.state.postList.map((post)=> {return (
                                <BlogList key={post.id} autor={post.owner.login} gistKey={post.id} type={'gist'} name={post.description}  url={post.html_url} date={post.created_at}/>
                                )}
                            )
                        }
                    </div>
                    ):(
                    <div className="container--info">
                        <span>
                        <CockpitInfo title={'Welcome.'} info={'Here you can search for all you´re github repos, or any person, name you can think of. You can login too in the menu above'} />
                        <SearchBtn  search={this.gitSrv}/>
                        </span>
                        <div className="loader" style={this.proccesStyle()} ><img src={loader} alt="loader" /></div>
                        <UserSnippet key={this.state.userOwner.id} description={this.state.userOwner.type} userLogin={this.state.userOwner.login} avatarUrl={this.state.userOwner.avatar_url} />
                        {
                            this.state.postList && this.state.postList.map((post)=> {return (
                                <BlogList key={post.id} type={'repo'} name={post.full_name}  url={post.html_url} date={post.created_at}/>
                                )}
                            )
                        }                       
                    </div>
                    )
                }
                <div className="container--img">
                    <img src={bg} alt="Background Posts" />
                </div>
            </div>
        )
    }
}
const mapStateToprops = state => {
    return {
        _logProccess: state.auth.logProccess,
        _userData: state.auth.user
    }
}

export default connect(mapStateToprops , null)(ContentLanding)
