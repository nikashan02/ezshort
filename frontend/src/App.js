import React, { Component } from 'react';
import './App.css'
import { Typography } from '@material-ui/core';
import LazyHero from 'react-lazy-hero';
import { withStyles} from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redirect from './Redirect';

const WhiteTextTypography = withStyles({
  root: {
    color: "#ECEFF4"
  }
})(Typography);

class App extends Component {
  render() {
    return (

      <Router>
        <div className="container">
          <Route path="/" exact render={() => (
            <div>
              
            </div>
          )} />
          <Route path="/:hash" component={Redirect} exact />
        </div>
      </Router>

    );
  }
}

export default App;