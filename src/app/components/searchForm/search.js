import React, { Component } from 'react'

export class Search extends Component {
    state = {
        name : ''
    }
    onCHange = (e) => this.setState({[e.target.name]: e.target.value})
    filterApi = (e) => {
        e.preventDefault()
        this.props.search(this.state.name);
        // this.setState({ name : '' })
    }

    render() {
        return (
            <form onSubmit={this.filterApi} id="filterByUser">
                <div className="filter-wrap">
                    <label for="name"><i className="fa fa-search"></i></label>
                    <input 
                        type="text" className="form-filter" 
                        id="filter" name="name"  placeholder="Nickname of gith user"
                        value={this.state.name} onChange={this.onCHange}
                    ></input>
                </div>
                <button type="submit" className="search-btn">Search ...</button>
            </form>
        )
    }
}

export default Search
