import React from 'react'
import {Link} from 'react-router-dom'

const BlogList = (props) =>{
    const { autor , name , date , url , type , gistKey} = props
    return(
        <article>
            <p className="date"><span>{date} </span></p>
            <a href={url}>
            <h4>{name}</h4>
            </a>
            { type === 'gist' ? (
                <Link to={`/blog/${gistKey}?user=${autor}`} className="edit-gist">Edit ...</Link>
            ):(
                <a className="link" href={url} target="_blank">Read More ...</a>
            )
            }
        </article>
    )
}
export default BlogList