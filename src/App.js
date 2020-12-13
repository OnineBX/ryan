import React, { Component } from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Portfolios from './components/Portfolios';
import Profile from './components/Profile';

class App extends Component {

  componentDidMount(){
    let sidenav = document.querySelector('#side-nav');
    M.Sidenav.init(sidenav, {});
  }


  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/educations" component={Educations} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/portfolios" component={Portfolios} />
          </Switch>
        </>
      </Router>
    );
  }
  
}

export default App;
