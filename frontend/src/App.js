import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Redirect from './Redirect';
import axios from 'axios';
import validator from 'validator';
import Swal from 'sweetalert2';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      hidden: "none",
      fullUrl: "",
      shortUrl: ""
    };
  }

  shorten = (event) => {
    event.preventDefault();
    let valid = validator.isURL(this.state.fullUrl);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if(valid) {
      axios.post('api/endpoints/shortUrls', {'first': this.state.fullUrl})
      .then((res) => {
        this.setState ({
          shortUrl: `${"/"+res.data.short}`
        });
        this.setState({hidden: "flex"});
        Toast.fire({
          icon: 'success',
          title: 'Shortened URL created'
        })
      }, (error) => {
        console.log(error);
      });
    } else {      
      Toast.fire({
        icon: 'error',
        title: 'Please enter a valid URL'
      })
    }
  }

  setFullUrl = (event) => {
    this.setState({fullUrl: event.target.value})
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact render={() => (
            <div>
              
              <header style={{display: "flex", justifyContent: "center", alignItems: "flex-end", height: "40vh"}}>
                <h1 class="head">ezShort</h1>
              </header>

              <div style={{display: "flex", justifyContent: "center", alignItems: "flex-end", height: "2vh"}}>
                <h2><a href="https://github.com/nikashan02/ezshort">Github</a></h2>
              </div>
              
              <main>
                <form className="form-inline">
                  <fieldset style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
                    <input className="urlInput" placeholder="https://www.google.ca" onChange={this.setFullUrl} />
                    <input className="shortenBtn" type="button" value="Shorten" onClick={this.shorten} />
                  </fieldset>
                </form>
                <div style={{display: `${this.state.hidden}`, justifyContent: "center", alignItems: "flex-start"}}>
                  <div className="short">
                    <a href={this.state.shortUrl}><span className="link">{"ezshort.herokuapp.com"+this.state.shortUrl}</span></a>
                    <CopyToClipboard text={"ezshort.herokuapp.com"+this.state.shortUrl} onCopy={() => this.setState({copied: true})}>
                      <button className="copy" title="Copy to Clipboard"/>
                    </CopyToClipboard>
                  </div>
                </div>
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