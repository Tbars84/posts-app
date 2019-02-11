import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostItem extends Component {
  render() {
    let date = new Date(this.props.post.created_at);
    return (
      <article>
          <p className="date"><span>{`${date}`} </span></p>
          <a href={this.props.post.html_url}>
            <h4>{this.props.post.full_name}</h4>
          {/* <p>{this.props.post.description}</p> */}
          </a>  
          <button>Read More ...</button>
      </article>
    )
  }
}
PostItem.propTypes = {
    post: PropTypes.object.isRequired
}
export default PostItem