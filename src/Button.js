import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './INVODO-GREEN.png';
import './App.css';
import Client from './Client.js';
import App from './App.js';

class Button extends Component {
  render() {
      return (
        <button {...this.props}>
          START
        </button>
      );
    }
}

export default Button;
