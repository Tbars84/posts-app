import React, { Component } from 'react'

export class ContInfo extends Component {
    constructor(props){
        super()
        this.title = 'Blog msco.'
        this.body = 'Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.'
    }
    render(props) {
        return (
            <div>
            <h1>{this.title}</h1>
            <p className="subtitle">{this.body}</p>
            </div>
        )
    }
}

export default ContInfo
