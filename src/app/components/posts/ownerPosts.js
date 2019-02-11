import React, { Component } from 'react'

export class OwnerPosts extends Component {
  render() {
    return (
      <div className="user-card" >
        <div className="user--img">
            <img alt={this.props.userData.login} src={this.props.userData.avatar_url} />
        </div>
        <div className="user--info">
            <h3>{this.props.userData.login}</h3>
            <p>{this.props.userData.type}</p>
        </div>
      </div>
    )
  }
}

export default OwnerPosts
