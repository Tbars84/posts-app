import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class OwnerPosts extends Component {

  constructor(props){
    super(props)
    this.avatar = props.avatarUrl
    this.userName = props.userLogin
    this.desc = props.description
  }

  render(props) {
    return (
      <div className="user-card" >
        <div className="user--img">
            <img alt={this.userName} src={this.avatar} />
        </div>
        <div className="user--info">
            <h3>{this.userName}</h3>
            <p>{this.desc}</p>
        </div>
      </div>
    )
  }
}
OwnerPosts.propTypes = {
  avatarUrl : PropTypes.string,
  userLogin : PropTypes.string,
  description : PropTypes.string,
}
export default OwnerPosts
