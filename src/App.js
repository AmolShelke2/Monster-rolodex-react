import './App.css';
import { Component } from 'react';
import React from 'react';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredState = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monster"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredState} />
      </div>
    );
  }
}

export default App;

// Search box component.
