import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './blogSt.css'
export class BlogList extends Component {
  constructor(props){
    super(props)
    this.name = props._postName
    this.url = props._postUrl
    this.date = props._posDate
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

BlogList.propTypes = {
    _postName : PropTypes.string,
    _postUrl : PropTypes.string,
    _posDate : PropTypes.string,
}
export default BlogList
