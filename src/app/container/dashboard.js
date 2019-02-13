import React, { Component } from 'react'
import ContInfo from '../components/blogContent/containerInfo/contInfo'
// import BloggerInfo from '../components/blogContent/bloggerSnippet'


class DashBoard extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <div>
            <ContInfo _title='Blog msco.' 
            _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
            {/* <BloggerInfo key={this.state.idToken} description={firebase.auth().currentUser.email} userLogin={firebase.auth().currentUser.displayName} avatarUrl={firebase.auth().currentUser.photoURL} /> */}

      </div>
    )
  }
}


export default DashBoard;
