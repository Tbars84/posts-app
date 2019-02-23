import React, { Component } from 'react'
import Gist from 'super-react-gist' 
import './detail.css';
import bg from '../../assets/background-detail.svg';

export class ContentDetail extends Component {
    constructor(props){
        super()
        this.autor = ''
        this.idBlog = props.match.params.id;
    }
    componentDidMount() {
        console.log(this.autor)
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            this.autor = param[1]
        }
    }
    render() {
        console.log(this.props.location.search.split('='))
        this.autor  = this.props.location.search.split('=').filter(function(el , index) {return index == 1});
        console.log(this.autor)
        return (
            <div className="container">  
                <div className="container--info">
                    <div>
                        <h2>Check out your gist</h2>
                        <Gist url={`https://gist.github.com/${this.autor[0]}/${this.idBlog}`} />
                    </div>
                </div>
                <div className="container--img">
                    <img src={bg} alt="Background Posts" />
                </div>
            </div>
        )
    }
}

export default ContentDetail
