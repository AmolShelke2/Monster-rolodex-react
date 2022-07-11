import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankerstein',
          id: 'acc1',
        },

        {
          name: 'Dracula',
          id: 'acc2',
        },

        {
          name: 'Zombie',
          id: 'acc3',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
