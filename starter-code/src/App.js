import React, { Component } from "react";
import Contacts from "./Contacts.jsx";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5)
  };

  randomContact = () => {
    let found;

    while (!found && this.state.contactsList.length <= contacts.length) {
      const random = contacts[Math.floor(Math.random() * contacts.length)];

      const alreadyExisting = this.state.contactsList.find(contact => {
        return contact.id === random.id;
      });

      if (!alreadyExisting) {
        found = random;
      }
    }

    if (found) {
      console.log(found);
      this.setState({ contactsList: [found, ...this.state.contactsList] });
    }
  };

  sortPop = () => {
    let popArr = this.state.contactsList;
    popArr.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    console.log(popArr);
    this.setState({ contactList: popArr });
  };

  sortName = () => {
    let nameArr = this.state.contactsList;
    nameArr.sort((a, b) => (a.name > b.name ? 1 : -1));
    console.log(nameArr);
    this.setState({ contactList: nameArr });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.randomContact}> Random person</button>
        <button onClick={this.sortPop}> sort by pop</button>
        <button onClick={this.sortName}> sort by name</button>
        <Contacts contacts={this.state.contactsList} />
      </div>
    );
  }
}

export default App;
