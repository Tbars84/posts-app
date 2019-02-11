import React, { Component } from 'react'
import PostItem from './post'
import PropTypes from 'prop-types'

export class PostItems extends Component {
  render() {
    return this.props.postList.map(post =>
        <PostItem key={post.id} post={post}/>
    )
  }
}

PostItems.propTypes = {
    postList: PropTypes.array.isRequired
}
export default PostItems
