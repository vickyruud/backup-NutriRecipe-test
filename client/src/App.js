import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ["Click button to fetch"]
    }
  }

  fetchUsers = () => {
    axios.get('/api/users') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response) // Just the message
      this.setState({
        message: response.data[0].name
      });
    }) 
  }

  fetchRecipes = () => {
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
      <div className="App">
        <h1>{ this.state.message }</h1>
        <Link fetchUsers ={this.fetchUsers} to="/users">User</Link> ||
        <Link fetchRecipes ={this.fetchRecipes} to="recipes">Recipes</Link>
      </div>
    );
  }
}

export default App;
