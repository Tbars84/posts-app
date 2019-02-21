import React, { Component } from 'react'

export class BlogDetail extends Component {
    constructor(props){
        super()
        this.idBlog = props.match.params.id;
    }
    render(props) {
        return (
            <div>
                Blog Detail {this.idBlog}
            </div>
        )
    }
}

export default BlogDetail
