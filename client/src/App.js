import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';
import NavBar from './NavBar.js';
import Button from '@mui/material/Button';
import Recipe from './Recipe.js'


class App extends Component {
// Instantiation
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
<<<<<<< HEAD
        <NavBar />
        <h1>{ this.state.message }</h1>
        <Button onClick={this.fetchData} >
          Fetch Data
        </Button>
        <Recipe />   
=======
        <NavBar login_name = {'Administrator'} login_right={1} />
        {/* <NavBar login_name = {'Registered User'} login_right={0} /> */}
        {/*<NavBar login_name = {''} /> {/* Unregistered User */}
        <h1>{ this.state.message }</h1>
        <Link fetchUsers ={this.fetchUsers} to="/users">User</Link> ||
        <Link fetchRecipes ={this.fetchRecipes} to="recipes">Recipes</Link>
>>>>>>> master
      </div>
    );
  }
}

export default App;
