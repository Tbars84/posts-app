import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './blogSt.css'

export class BloggerInfo extends Component {

  constructor(props){
    super(props)
    this.avatar = props.avatarUrl
    this.userName = props.userLogin
    this.desc = props.description
  }

  render(props) {
    return (
        this.userName 
        && this.userName ? (
          <div className="user-card" >
            <div className="user--img">
                <img alt={this.userName} src={this.avatar} />
            </div>
            <div className="user--info">
                <h3>{this.userName}</h3>
                <p>{this.desc}</p>
            </div>
          </div>
        ) : (
          <div className="user-card" >
            <div className="user--info">
                <p><b>Please write down the nick you wish to search</b></p>
            </div>
          </div>
        )
    )
  }
}
BloggerInfo.propTypes = {
  avatarUrl : PropTypes.string,
  userLogin : PropTypes.string,
  description : PropTypes.string,
}
export default BloggerInfo
