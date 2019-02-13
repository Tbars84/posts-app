import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContInfo from '../components/blogContent/containerInfo/contInfo'
import { Redirect } from 'react-router-dom'
// import BloggerInfo from '../components/blogContent/bloggerSnippet'


class DashBoard extends Component {

  render() {
    const { auth } = this.props;
    console.log(auth)
    if (!auth.uid) return <Redirect to='/' /> 

    return (
      <div>
            <ContInfo _title='Blog msco.' 
            _body='Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.' />
            {/* <BloggerInfo key={this.state.idToken} description={firebase.auth().currentUser.email} userLogin={firebase.auth().currentUser.displayName} avatarUrl={firebase.auth().currentUser.photoURL} /> */}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps , null )(DashBoard)

