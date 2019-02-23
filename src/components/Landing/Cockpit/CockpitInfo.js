import React from 'react'

const CockpitInfo = (props) =>{
    const {title , info} = props
    return(
        <div>
            <h1>{title}</h1>
            <p className="subtitle">{info}</p>                
        </div>
    )
}
export default CockpitInfo


