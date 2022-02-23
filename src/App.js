import { Component } from "react";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
