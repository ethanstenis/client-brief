import React, { Component } from 'react';
import logo from './INVODO-GREEN.png';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1 className="App-intro">
          <span id="welcome">Welcome to the Invodo</span> <br/>Client Creative Brief
        </h1>
        <div>
      <button type="submit" onClick={this.handleClick}>START</button>
        </div>
      </div>
    );
  }
}

export default App;

class Client extends Component {
  this.setState({showClient: true});

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
