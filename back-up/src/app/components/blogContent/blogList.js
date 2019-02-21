import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './blogSt.css'
export class BlogList extends Component {
  constructor(props){
    super(props)
    this.gistKey = props._postKey
    this.type = props._type
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
          {
            this.type && this.type === 'gist' ?
            (
              <Link to={`/blog/${this.gistKey}`} className="edit-gist">Edit ...</Link>
            ):
            (
              <button>Read More ...</button>
            )
          }
      </article>
    )
  }
}

BlogList.propTypes = {
    _postKey : PropTypes.string,  
    _type : PropTypes.string,  
    _postName : PropTypes.string,
    _postUrl : PropTypes.string,
    _posDate : PropTypes.string,
}
export default BlogList
