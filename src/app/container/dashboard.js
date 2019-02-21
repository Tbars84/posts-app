import React, { Component } from 'react'
import axios from 'axios';
import loader from '../assets/three-dots.svg'
import { connect } from 'react-redux'
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import { Redirect } from 'react-router-dom'
import BloggerInfo from '../components/blogContent/bloggerSnippet'
import BlogList from '../components/blogContent/blogList'

class DashBoard extends Component {
  state = {
    userLog: {},
    loaderPost: false,
    postList : []
  }
  getGist = (name) => {
    axios.get(`https://api.github.com/users/${name}/gists?page=1&per_page=30`)
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
        this.setState({
          loaderPost: true,
        })
        console.log(error);
    });
  }
  proccesStyle = () =>{
    return{
        display: this.state.loaderPost ? 'block' : 'none'
    }
  }
  componentDidMount(){
    // console.log(this.props.auth.displayName)
    this.getGist(this.props.auth.displayName)
  }
  render() {
    const { auth  } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
    const token = localStorage.getItem('uidToken')
    const userCreds =  JSON.parse(localStorage.getItem('userRegistered'));
    return (
      <div>
            <ContInfo _title='Blog msco.' 
            _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
            <BloggerInfo key={token} tokenId={token} description={userCreds.email} userLogin={userCreds.displayName} avatarUrl={userCreds.photoURL} />
            <div className="loader" style={this.proccesStyle()} ><img src={loader} alt="loader" /></div>
            {
              this.state.postList ? (this.state.postList.map(
                (post)=> {return (
                  <BlogList key={post.id} _postKey={post.id} _type={'gist'} _postName={post.description}  _postUrl={post.html_url} _posDate={post.created_at}/>
                )}                
                )
              ):('asjdak')
            }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps , null )(DashBoard)

