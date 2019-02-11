import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostItems extends Component {
  constructor(props){
    super(props)
    this.name = props.postName
    this.url = props.postUrl
    this.date = props.posDate
  }
  render(props) {
    return (
      <article>
          <p className="date"><span>{this.date} </span></p>
          <a href={this.url}>
            <h4>{this.name}</h4>
          </a>  
          <button>Read More ...</button>
      </article>
    )
  }
}

PostItems.propTypes = {
    postName : PropTypes.string,
    postUrl : PropTypes.string,
    posDate : PropTypes.string,
}
export default PostItems
