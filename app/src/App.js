import React, { Component } from 'react';
//import $ from 'jquery'
import './App.css';
import Navbar from './Components/Navbar.js'
import Channels from './Components/Channels'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Channels />
      </div>
    );
  }
}

export default App;
