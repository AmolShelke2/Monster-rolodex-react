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
          name: 'Amol Shelke',
          id: 'student1',
        },

        {
          name: 'Yash Thakur',
          id: 'student2',
        },

        {
          name: 'Khushal Bhdwa',
          id: 'Student3',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
