import React, { useEffect } from 'react';
import EzShort from './EzShort';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Redirect from './Redirect';
require('dotenv').config();

ReactGA.initialize(process.env.REACT_APP_GA_KEY); 

function App() {

  useEffect( () => {
    ReactGA.pageview(window.location.pathname + window.location.search); 
  });

  return (
    <Router>
      <div className="container">
        <Route path="/" exact render={() => (
          <EzShort/>
        )} />
        <Route path="/:hash" component={Redirect} exact />
      </div>
    </Router>
  );
}

export default withRouter(App); 
