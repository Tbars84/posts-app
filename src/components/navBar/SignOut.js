import React from 'react'

const SingOut = (props) =>{
    return(
        <div className="user-card nav-bar" >
            <div className="user--img">
                <img alt={props.nameUser} src={props.avatarUser} />
            </div>
            <div className="user--info">
                <h3>{props.nameUser}</h3>
                <button onClick={props.clicked} >Log Out</button>
            </div>
        </div>
    )
}
export default SingOut

