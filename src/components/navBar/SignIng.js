import React from 'react'

const SingIn = (props) =>{
    const {text} = props
    return(
        <button className="singIn" onClick={props.clicked}>
            <p>{text}</p>
        </button>
    )
}
export default SingIn


