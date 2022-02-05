import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar.js';
import Button from '@mui/material/Button';
import Recipe from './Recipe.js'


class App extends Component {
// Instantiation
  constructor(props) {
    super(props)
    this.state = {
      message: ["Click button to fetch data"]
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response) // Just the message
      this.setState({
        message: response.data[0].name
      });
    }) 
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>{ this.state.message }</h1>
        <Button onClick={this.fetchData} >
          Fetch Data
        </Button>
        <Recipe />   
      </div>
    );
  }
}

export default App;
