import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './invodo-logo-black.png';
import './App.css';
// import App from './App.js';
// import Button from './Button.js';

class Client extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 className="App-intro">
          Client Information:
        </h1>
        <div className="Client-info">
          <form>
            <input>Full Name</input>
            <input>Company</input>
            <input>Project Name</input>
          </form>
        </div>
        <button>Next Page</button>
      </div>
    );
  }
}

export default Client;
