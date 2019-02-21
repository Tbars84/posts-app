import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class ContInfo extends Component {
    constructor(props){
        super()
        this.title = props._title
        this.body = props._body
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

ContInfo.propTypes = {
    _title : PropTypes.string,
    _body : PropTypes.string,
}
export default ContInfo
