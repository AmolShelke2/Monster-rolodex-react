import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import React from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: "Hello Lets learn react",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Amol" })}>
            Change text
          </button>
        </header>
      </div>
    );
  }
}

export default App;

// started working on Project.
