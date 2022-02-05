import React, { Component } from 'react';
import axios from 'axios';


class Recipe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ["Click button to fetch data"]
    }
  }

  fetchData = () => {
    axios.get('/api/recipes') // You can simply make your requests to "/api/whatever you want"
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
      <div className="Recipe">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
    );
  }
}

export default Recipe;
