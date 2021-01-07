import { Button, TextField, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

export default class Shortener extends Component {

  constructor() {
    super();
    this.state = {
      data: [
              {
                full: 'https://github.com/nikashan02',
                short: '123456'
              }
            ],
      urlField: ""
    };
  }

  componentDidMount = () => {
    axios.get("api/endpoints/getUrls").then(response => {
      this.setState ({
        data: response.data
      });
    });
  }

  setText = (url) => {
    this.setState({urlField: url.target.value})
  }

  getShort = () => {
    axios.post('api/endpoints/shortUrls', {'first': this.state.urlField})
    .then((res) => {
      this.setState ({
        data: [res.data]
      });
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <TextField onChange={this.setText} required id="url" fullWidth="true" label="URL" variant="outlined"/>
            </Grid>
            <Grid item xs={2}>
              <Button onClick={this.getShort} fullWidth="true" size="large" variant="contained" color="#4C566A" style={{maxHeight: '100%', minHeight: '100%'}}>Shorten</Button>
            </Grid>
          </Grid>
        </form>

        <Grid container spacing={3} midWidth="500">
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Full URL</TableCell>
                    <TableCell align="right">Short URL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.data.map((row) => (
                    <TableRow key={row.full}>
                      <TableCell component="th" scope="row">
                        {row.full}
                      </TableCell>
                      <TableCell align="right">{row.short}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
      
    );
  }
}
