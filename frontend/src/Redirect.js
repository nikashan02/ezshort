import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class Redirect extends Component {
  state = {
    redirectURL: ''
  };

  componentDidMount() {
    const short = this.props.match.params.hash;

    axios.get('/api/endpoints/redirect',{
      headers: {
        short
      }
    })
    .then(res => {
      if (res.data.full) {
        window.location.replace(res.data.full);
      }
    })
    .catch(err => {
      this.setState({
        redirectURL: 'Invalid URL'
      })
    });
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start"}}>
        <div>
          <span className='link'>Redirecting (if the requested page does not load, your link may have expired)</span>
        </div>
      </div>
    );
  }
}

export default Redirect;