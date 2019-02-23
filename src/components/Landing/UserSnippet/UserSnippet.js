import React from 'react'

const UserSnippet = (props) =>{
    const {userLogin , avatarUrl , description} = props
    return(
        <div className="user-card" >
            <div className="user--img">
                <img alt={userLogin} src={avatarUrl} />
            </div>
            <div className="user--info">
                <h3>{userLogin}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default UserSnippet


