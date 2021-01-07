import React, {Component} from 'react';
import axios from "axios";

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
      console.log(res.data);
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
      <div>
        <p>{this.state.redirectURL}</p>
      </div>
    );
  }
}

export default Redirect;