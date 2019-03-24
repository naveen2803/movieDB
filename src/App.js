import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/main/main';
import Details from './components/details/details';
import PageNotFound from './components/pageNotFound/pageNotFound';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
              <div>
                  <Switch>
                      <Route exact path="/" component={Main}/>
                      <Route path="/details/:id" component={Details}/>
                      <Route component={PageNotFound}/>
                  </Switch>
              </div>
            </Router>
    );
  }
}

export default App;
