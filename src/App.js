import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list/CardList";
import SearchBox from "./Components/seachBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    const { monsters, searchTerm } = this.state;
    const filteredList = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
          placeHolder="Search Monsters"
        />
        <CardList monsters={filteredList} />
      </div>
    );
  }
}

export default App;
