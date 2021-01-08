import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redirect from './Redirect';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="container">
          <Route path="/" exact render={() => (
            <div>
              
              <header style={{display: "flex", justifyContent: "center", alignItems: "flex-end", height: "40vh"}}>
                <h1>ezShort</h1>
              </header>
              
              <main>
                <form className="form-inline">
                  <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
                    <input className="urlInput"/>
                    <input className="shortenBtn" type="button" value="Shorten"/>
                  </fieldset>
                </form>
                {/* <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
                  <p>Hello</p>
                </div> */}
              </main>

            </div>
          )} />
          <Route path="/:hash" component={Redirect} exact />
        </div>
      </Router>

    );
  }
}

export default App;