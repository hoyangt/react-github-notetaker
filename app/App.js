import React, { Component } from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import SearchGithub from './components/SearchGithub';
import Main from './components/Main';

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="main-container">
        <Router history={history}>
          <nav className="navbar navbar-default" role="navigation">
            <div className="col-sm-7 col-sm-offset-2" style={{ marginTop: 15 }}>
              <SearchGithub />
            </div>
          </nav>
          <div className="container">
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}


render(<App />, document.getElementById("app"));
