import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import {fetchAllGists} from '../store/actions/apiCalls'
import { Redirect } from 'react-router-dom'
import BloggerInfo from '../components/blogContent/bloggerSnippet'
import BlogList from '../components/blogContent/blogList'

class DashBoard extends Component {
  state = {
    userLog: {},
    userToken: ''
  }
  render() {
    const { auth , data } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
    const token = localStorage.getItem('uidToken')
    const userCreds =  JSON.parse(localStorage.getItem('userRegistered'));

    return (
      <div>
            <ContInfo _title='Blog msco.' 
            _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
            <BloggerInfo key={token} tokenId={token} description={userCreds.email} userLogin={userCreds.displayName} avatarUrl={userCreds.photoURL} />
            {
              data && data.map(
                (post)=> {return (
                  <BlogList key={post.id} _postKey={post.id} _type={'gist'} _postName={post.description}  _postUrl={post.html_url} _posDate={post.created_at}/>
                )}                
              )
            }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGists:  () => dispatch(fetchAllGists())
  }
}

export default connect(mapStateToProps , mapDispatchToProps )(DashBoard)

