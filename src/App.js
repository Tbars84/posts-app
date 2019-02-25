import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch , Route , Redirect} from 'react-router-dom'
import './App.css';
import Navbar from './containers/navBar/Navbar';
import ContentLanding from './containers/ContentLanding/ContentLanding'
import ContentDetail from './containers/Detail/ContentDetail'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggin: false,
      blogs: [],
    }
  }
  render() {
    const{_logProccess} = this.props
    return (
      <Router>
          <Switch>  
          <div className="App">  
            <Navbar type="Navigation" />
            <Route exact path="/" component={ContentLanding} />
            { _logProccess ? <Route path="/blog/:id" component={ContentDetail} /> : <Redirect to="/" />  }
          </div>
        </Switch>
      </Router>
    );
  }
}
const mapStateToprops = state => {
  return {
      _logProccess: state.auth.logProccess,
  }
}
export default connect(mapStateToprops , null)(App);
